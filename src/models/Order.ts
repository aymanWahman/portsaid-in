// Define interfaces for type safety
export interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    id: string;
    customerName: string;
    orderDate: Date;
    totalAmount: number;
    items: OrderItem[];
  }
  
  // OrderModel class
  export class OrderModel implements Order {
    constructor(
      public id: string,
      public customerName: string,
      public orderDate: Date,
      public totalAmount: number,
      public items: OrderItem[]
    ) {}
  
    // Static method to simulate fetching orders from a database
    static async find(): Promise<OrderModel[]> {
      // Example mock data
      const orders: OrderModel[] = [
        new OrderModel('1', 'John Doe', new Date(), 100, [
          { productId: 'prod1', quantity: 2, price: 50 },
        ]),
        new OrderModel('2', 'Jane Smith', new Date(), 150, [
          { productId: 'prod2', quantity: 3, price: 50 },
        ]),
      ];
  
      return new Promise((resolve) => setTimeout(() => resolve(orders), 500)); // Simulate async operation
    }
  
    // Method to calculate the total amount based on items
    calculateTotal(): number {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  
    // Method to add an item to the order
    addItem(item: OrderItem): void {
      this.items.push(item);
      this.totalAmount = this.calculateTotal();
    }
  
    // Method to remove an item from the order
    removeItem(productId: string): void {
      this.items = this.items.filter((item) => item.productId !== productId);
      this.totalAmount = this.calculateTotal();
    }
  }
  