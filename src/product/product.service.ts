import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: any) {
    return this.prisma.products.create({ data });
  }

  async getAllProducts() {
    return this.prisma.products.findMany();
  }

  async getProductById(id: number) {
    return this.prisma.products.findUnique({ where: { id } });
  }

  async updateProduct(id: number, data: any) {
    return this.prisma.products.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number) {
    return this.prisma.products.delete({ where: { id } });
  }
}
