import type { User } from '@/modules/auth/interfaces/user.interface';

export interface Product {
  id:         number;
  titulo:     string;
  imagens:    string[];
  preco:      string;
  custo:      string;
  descricao:  string;
  created_at: Date;
  updated_at: Date;
}
