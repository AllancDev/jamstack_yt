import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637637eaff4da05bf58b798a',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1668691714700-quatro-queijos.png',
          'price': 80,
        },
        'quantity': 18,
        '_id': '637637eaff4da05bf58b798b'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1668691714700-quatro-queijos.png',
          'price': 80,
        },
        'quantity': 18,
        '_id': '637637eaff4da05bf58b798b'
      },
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}

      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />

    </Container>
  );
}
