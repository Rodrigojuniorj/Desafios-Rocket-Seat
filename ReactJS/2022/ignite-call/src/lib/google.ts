import dayjs from 'dayjs'
import { google } from 'googleapis'
import { prisma } from './prisma'

export async function getGoogleOAuthToken(userId: string) {
  const accout = await prisma.account.findFirstOrThrow({
    where: {
      provider: 'google',
      user_id: userId,
    },
  })

  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  )

  auth.setCredentials({
    access_token: accout.access_token,
    refresh_token: accout.refresh_token,
    expiry_date: accout.expires_at ? accout.expires_at * 1000 : null,
  })

  if (!accout.expires_at) {
    return auth
  }

  const isTokenExpired = dayjs(accout.expires_at * 1000).isBefore(new Date())

  if (isTokenExpired) {
    const { credentials } = await auth.refreshAccessToken()
    const {
      access_token,
      expiry_date,
      id_token,
      refresh_token,
      scope,
      token_type,
    } = credentials

    await prisma.account.update({
      where: {
        id: accout.id,
      },
      data: {
        access_token,
        expires_at: expiry_date ? Math.floor(expiry_date / 1000) : null,
        id_token,
        refresh_token,
        scope,
        token_type,
      },
    })

    auth.setCredentials({
      access_token,
      refresh_token,
      expiry_date,
    })
  }

  return auth
}
