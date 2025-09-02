
export type Item = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity?: number;
};

export interface DeliveryFormData {
    clienteId: number;
    firstName: string;
    lastName: string;
    postalCode: string;
    address: string;
    complement: string; // complemento é opcional
    city: string;
    state: string;
    phone: string;
    country: string;
    saveInfo: "on" | undefined; // O checkbox retorna "on" ou undefined se não estiver marcado
}

