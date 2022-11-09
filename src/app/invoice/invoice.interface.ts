export interface InvoiceService {
  description: string;
  amount: number;
}

export interface Invoice {
  id: string;
  total: number;
  services: InvoiceService[];
}
