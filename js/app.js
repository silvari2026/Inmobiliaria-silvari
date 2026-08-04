// ===== DATOS DE PROPIEDADES =====
const propiedades = [
    {
        id: 1,
        titulo: 'Casa Colonial en Punta Gorda',
        ubicacion: 'Punta Gorda, Cienfuegos',
        precio: 180000,
        habitaciones: 4,
        banos: 3,
        metros: 240,
        estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80'
        ],
        descripcion: 'Hermosa casa colonial restaurada en el corazón de Punta Gorda. Conserva sus detalles arquitectónicos originales combinados con comodidades modernas. Vista parcial a la bahía de Cienfuegos.',
        latitud: 23.1132,
        longitud: -80.4532
    },
    {
        id: 2,
        titulo: 'Apartamento Vista al Mar',
        ubicacion: 'Malecón, Cienfuegos',
        precio: 95000,
        habitaciones: 2,
        banos: 2,
        metros: 120,
        estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
        ],
        descripcion: 'Moderno apartamento con vista panorámica al mar Caribe. Totalmente equipado, con acabados de primera calidad. Ubicado en una de las zonas más privilegiadas del Malecón cienfueguero.',
        latitud: 23.1156,
        longitud: -80.4510
    },
    {
        id: 3,
        titulo: 'Villa Moderna en La Punta',
        ubicacion: 'La Punta, Cienfuegos',
        precio: 250000,
        habitaciones: 5,
        banos: 4,
        metros: 380,
        estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80'
        ],
        descripcion: 'Espectacular villa de diseño contemporáneo con piscina privada y jardín tropical. Amplios espacios interiores, cocina italiana y terraza con vista a la bahía.',
        latitud: 23.1089,
        longitud: -80.4567
    },
    {
        id: 4,
        titulo: 'Casa de Época Centro Histórico',
        ubicacion: 'Centro Histórico, Cienfuegos',
        precio: 150000,
        habitaciones: 3,
        banos: 2,
        metros: 200,
        estado: 'vendido',
        imagen: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
            'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80'
        ],
        descripcion: 'Joyita arquitectónica del siglo XIX en el casco histórico de Cienfuegos, declarado Patrimonio de la Humanidad por la UNESCO. Techos altos, patio interior y detalles originales.',
        latitud: 23.1210,
        longitud: -80.4489
    },
    {
        id: 5,
        titulo: 'Penthouse Edificio Jagua',
        ubicacion: 'Paseo del Prado, Cienfuegos',
        precio: 120000,
        habitaciones: 3,
        banos: 2,
        metros: 160,
        estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600566753086-4df530c79ef8?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600566753086-4df530c79ef8?w=800&q=80',
            'https://images.unsplash.com/photo-1600573472562-36d9c0e46a2b?w=800&q=80'
        ],
        descripcion: 'Penthouse de lujo en el emblemático Edificio Jagua. Terraza privada con jacuzzi, acabados de mármol y cocina abierta. Las mejores vistas de la ciudad.',
        latitud: 23.1190,
        longitud: -80.4498
    },
    {
        id: 6,
        titulo: 'Finca Restaurada Rancho Luna',
        ubicacion: 'Rancho Luna, Cienfuegos',
        precio: 320000,
        habitaciones: 6,
        banos: 5,
        metros: 520,
        estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        imagenes: [
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
        ],
        descripcion: 'Antigua finca restaurada con exquisitez a pocos minutos de las playas de Rancho Luna. Terrenos extensos con árboles frutales, casa principal y casa de huéspedes independiente.',
        latitud: 23.0987,
        longitud: -80.4345
    }
];

// ===== FAVORITOS =====
let favoritos = JSON.parse(localStorage.getItem('silvari_favoritos')) || [];

function guardarFavoritos() {
    localStorage.setItem('silvari_favoritos', JSON.stringify(favoritos));
}

function toggleFavorito(id, event) {
    event.preventDefault();
    event.stopPropagation();
    
    const boton = event.currentTarget;
    const index = favoritos.indexOf(id);
    
    if (index > -1) {
        favoritos.splice(index, 1);
        boton.classList.remove('activo');
    } else {
        favoritos.push(id);
        boton.classList.add('activo');
        boton.style.transform = 'scale(1.3)';
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 200);
    }
    
    guardarFavoritos();
}

// ===== FORMATEAR PRECIO =====
function formatearPrecio(precio) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(precio);
}

// ===== CREAR TARJETA DE PROPIEDAD =====
function crearTarjeta(propiedad) {
    const articulo = document.createElement('article');
    articulo.className = 'tarjeta-propiedad';
    articulo.setAttribute('data-id', propiedad.id);
    
    const esFavorito = favoritos.includes(propiedad.id);
    
    articulo.innerHTML = `
        <div class="tarjeta-imagen-container">
            <img 
                src="${propiedad.imagen}" 
                alt="${propiedad.titulo}" 
                class="tarjeta-imagen"
                loading="lazy"
            >
            <span class="tarjeta-etiqueta ${propiedad.estado === 'disponible' ? 'disponible' : 'vendido'}">
                ${propiedad.estado === 'disponible' ? 'Disponible' : 'Vendido'}
            </span>
            <button class="tarjeta-favorito ${esFavorito ? 'activo' : ''}" aria-label="Guardar en favoritos">
                <svg viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
            </button>
        </div>
        <div class="tarjeta-info">
            <h3 class="tarjeta-titulo">${propiedad.titulo}</h3>
            <p class="tarjeta-ubicacion">${propiedad.ubicacion}</p>
            <p class="tarjeta-precio">${formatearPrecio(propiedad.precio)}</p>
            <div class="tarjeta-caracteristicas">
                <span class="caracteristica">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    </svg>
                    ${propiedad.habitaciones} Hab.
                </span>
                <span class="caracteristica">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    ${propiedad.banos} Baños
                </span>
                <span class="caracteristica">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    </svg>
                    ${propiedad.metros}m²
                </span>
            </div>
            <div class="tarjeta-acciones">
                <a href="detalle-casa.html?id=${propiedad.id}" class="btn-ver-detalle">Ver Detalle</a>
                <a href="https://wa.me/5355415537?text=${encodeURIComponent('Hola, me interesa la propiedad: ' + propiedad.titulo + ' (' + formatearPrecio(propiedad.precio) + ')')}" class="btn-whatsapp-tarjeta" target="_blank" rel="noopener">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    Consultar
                </a>
            </div>
        </div>
    `;
    
    const btnFavorito = articulo.querySelector('.tarjeta-favorito');
    btnFavorito.addEventListener('click', (e) => toggleFavorito(propiedad.id, e));
    
    return articulo;
}

// ===== RENDERIZAR PROPIEDADES =====
function renderizarPropiedades(lista = propiedades) {
    const grid = document.getElementById('propiedades-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    lista.forEach(propiedad => {
        const tarjeta = crearTarjeta(propiedad);
        grid.appendChild(tarjeta);
    });
}

// ===== ABRIR WHATSAPP GENERAL =====
function abrirWhatsApp() {
    const mensaje = 'Hola, me interesa conocer más sobre las propiedades disponibles en Cienfuegos.';
    window.open(`https://wa.me/5355415537?text=${encodeURIComponent(mensaje)}`, '_blank', 'noopener');
}

// ===== FILTROS =====
function configurarFiltros() {
    const btnFiltrar = document.querySelector('.btn-filtrar');
    if (!btnFiltrar) return;
    
    btnFiltrar.addEventListener('click', () => {
        const selects = document.querySelectorAll('.filtro-select');
        const tipo = selects[0]?.value || '';
        const precioMax = selects[1]?.value || '';
        const habitaciones = selects[2]?.value || '';
        
        let filtradas = [...propiedades];
        
        if (tipo) {
            filtradas = filtradas.filter(p => {
                if (tipo === 'casa') return p.titulo.toLowerCase().includes('casa');
                if (tipo === 'apartamento') return p.titulo.toLowerCase().includes('apartamento');
                if (tipo === 'villa') return p.titulo.toLowerCase().includes('villa');
                if (tipo === 'finca') return p.titulo.toLowerCase().includes('finca');
                return true;
            });
        }
        
        if (precioMax) {
            filtradas = filtradas.filter(p => p.precio <= parseInt(precioMax));
        }
        
        if (habitaciones) {
            filtradas = filtradas.filter(p => p.habitaciones >= parseInt(habitaciones));
        }
        
        filtradas = filtradas.filter(p => p.estado === 'disponible');
        
        renderizarPropiedades(filtradas);
        
        document.getElementById('propiedades-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades();
    configurarFiltros();
});