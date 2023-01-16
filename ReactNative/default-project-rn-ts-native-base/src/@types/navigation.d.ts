export declare global {
  namespace ReactNavigation {
    // aqui você pode sobrescrever os tipos de navegação, e adiciona suas rotas
    interface RootParamList {
      home: undefined;
      new: undefined;
      details: { orderId: string };
    }
  }
}