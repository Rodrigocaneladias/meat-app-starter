class Order{
    constructor(
        public endereco: string,
        public number: number,
        public optionalAdress: string,
        public pagamento: string,
        public orderItem: OrderItem[]
    ){}
}

class OrderItem{
    constructor(
        public quantity: number, 
        public menuId: string 
    ){}
}

export {Order, OrderItem}