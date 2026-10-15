import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pelicula, Confiteria, TipoConfiteria } from '../models/cine.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/productos';

  private mockPeliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'RESIDENT EVIL: NOCHE CERO',
      genero: 'Terror / Acción',
      duracion: 114,
      director: 'Zach Cregger',
      sinopsis: 'Llega la aterradora reinvención de la saga de terror más aclamada de los videojuegos, ambientada en las oscuras instalaciones de la Corporación Umbrella.',
      clasificacionEdad: 'R-17',
      calificacion: 4.8,
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop',
      reparto: 'Zachary Levi, Kaya Scodelario',
      formatoDisponible: 'IMAX 3D / DBOX'
    },
    {
      id: 2,
      titulo: 'SPIDER-MAN: BEYOND THE SPIDER-VERSE',
      genero: 'Animación / Acción',
      duracion: 140,
      director: 'Joaquim Dos Santos',
      sinopsis: 'Miles Morales emprende un viaje épico a través del Multiverso para salvar a sus seres queridos de una amenaza cataclísmica imprevista.',
      clasificacionEdad: 'SAM 13',
      calificacion: 4.9,
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop',
      reparto: 'Shameik Moore, Hailee Steinfeld',
      formatoDisponible: '2D / 3D / ATMOS'
    },
    {
      id: 3,
      titulo: 'OPPENHEIMER',
      genero: 'Drama / Historia',
      duracion: 180,
      director: 'Christopher Nolan',
      sinopsis: 'La historia del físico teórico J. Robert Oppenheimer y su papel fundamental en el desarrollo de las primeras armas nucleares.',
      clasificacionEdad: 'SAM 16',
      calificacion: 5.0,
      poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=600&auto=format&fit=crop',
      reparto: 'Cillian Murphy, Emily Blunt, Matt Damon',
      formatoDisponible: 'IMAX 70MM / 2D'
    }
  ];

  private mockCandy: Confiteria[] = [
    {
      id: 1,
      nombre: 'Combo Mega Pochoclo + 2 Gaseosas',
      descripcion: '1 Balde de pochoclos gigantes (Dulces o Salados) + 2 Gaseosas grandes de 1L.',
      precio: 14500,
      estado: 'DISPONIBLE',
      tipo: TipoConfiteria.COMBO,
      imagen: '🍿'
    },
    {
      id: 2,
      nombre: 'Nacho Supreme con Queso Cheddar',
      descripcion: 'Caja de nachos crocantes con salsa de queso cheddar caliente y jalapeños.',
      precio: 8900,
      estado: 'DISPONIBLE',
      tipo: TipoConfiteria.COMIDA,
      imagen: '🧀'
    },
    {
      id: 3,
      nombre: 'Gaseosa Grande 1 Litro',
      descripcion: 'Coca-Cola, Coca Zero, Sprite o Fanta helada de 1000ml.',
      precio: 4500,
      estado: 'DISPONIBLE',
      tipo: TipoConfiteria.BEBIDA,
      imagen: '🥤'
    },
    {
      id: 4,
      nombre: 'Vaso Coleccionable Resident Evil',
      descripcion: 'Vaso de edición limitada de 1.2L con figura 3D en la tapa.',
      precio: 12000,
      estado: 'DISPONIBLE',
      tipo: TipoConfiteria.MERCHANDISING,
      imagen: '🥤⭐'
    }
  ];

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}/peliculas`).pipe(
      catchError(() => of(this.mockPeliculas))
    );
  }

  obtenerConfiteria(): Observable<Confiteria[]> {
    return this.http.get<Confiteria[]>(`${this.apiUrl}/confiteria`).pipe(
      catchError(() => of(this.mockCandy))
    );
  }
}