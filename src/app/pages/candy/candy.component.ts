import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../core/services/productos.service';
import { Confiteria } from '../../core/models/cine.models';

@Component({
  selector: 'app-candy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {
  productos: Confiteria[] = [];
  categoriaSeleccionada: string = 'TODOS';
  carrito: { producto: Confiteria; cantidad: number }[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerConfiteria().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error(err)
    });
  }

  get productosFiltrados(): Confiteria[] {
    if (this.categoriaSeleccionada === 'TODOS') return this.productos;
    return this.productos.filter(p => p.tipo === this.categoriaSeleccionada);
  }

  agregarAlCarrito(prod: Confiteria): void {
    const item = this.carrito.find(c => c.producto.id === prod.id);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ producto: prod, cantidad: 1 });
    }
  }

  get totalCarrito(): number {
    return this.carrito.reduce((acc, curr) => acc + (curr.producto.precio * curr.cantidad), 0);
  }
}