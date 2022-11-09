import { Invoice, InvoiceService } from './invoice.interface';

export const invoices: Invoice[] = [
  {
    id: 'INV-202211201',
    services: [
      { description: 'Concepto 1', amount: 20.99 },
      { description: 'Concepto 2', amount: 449.49 },
      { description: 'Concepto 3', amount: 80.15 },
    ],
  },
  {
    id: 'INV-202211202',
    services: [{ description: 'Concepto 1', amount: 25.5 }],
  },
  {
    id: 'INV-202211203',
    services: [
      { description: 'Concepto 1', amount: 40.99 },
      { description: 'Concepto 2', amount: 149.49 },
    ],
  },
  {
    id: 'INV-202211204',
    services: [
      { description: 'Concepto 1', amount: 210.99 },
      { description: 'Concepto 2', amount: 649.49 },
      { description: 'Concepto 3', amount: 50.15 },
    ],
  },
  {
    id: 'INV-202211205',
    services: [
      { description: 'Concepto 1', amount: 30.49 },
      { description: 'Concepto 2', amount: 79.49 },
      { description: 'Concepto 3', amount: 9.15 },
      { description: 'Concepto 4', amount: 10.15 },
    ],
  },
].map((invoice) => ({ ...invoice, total: calculateTotal(invoice.services) }));

function calculateTotal(services: InvoiceService[]): number {
  return services.reduce((acc, curr) => (acc += curr.amount), 0);
}
