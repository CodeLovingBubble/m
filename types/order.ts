export type OrderStatus = 'unpaid' | 'pending' | 'shipped' | 'completed' | 'cancelled'

export interface OrderItem {
    id: string
    name: string
    image: string
    price: number
    quantity: number
    spec?: string
}

export interface OrderAddress {
    name: string
    phone: string
    fullAddress: string
}

export interface Order {
    id: string
    status: OrderStatus
    createTime: string
    payTime?: string
    totalAmount: number
    shippingFee?: number
    paymentAmount: number
    address: OrderAddress
    items: OrderItem[]
}