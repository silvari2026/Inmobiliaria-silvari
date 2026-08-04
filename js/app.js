// ===== DATOS DE PROPIEDADES =====
var propiedades = [
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
        descripcion: 'Hermosa casa colonial restaurada en el corazon de Punta Gorda. Conserva sus detalles arquitectonicos originales combinados con comodidades modernas. Vista parcial a la bahia de Cienfuegos.',
        latitud: 22.1132,
        longitud: -80.4532
    },
    {
        id: 2,
        titulo: 'Apartamento Vista al Mar',
        ubicacion: 'Malecon, Cienfuegos',
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
        descripcion: 'Moderno apartamento con vista panoramica al mar Caribe. Totalmente equipado, con acabados de primera calidad. Ubicado en una de las zonas mas privilegiadas del Malecon cienfueguero.',
        latitud: 22.1156,
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
        descripcion: 'Espectacular villa de diseno contemporaneo con piscina privada y jardin tropical. Amplios espacios interiores, cocina italiana y terraza con vista a la bahia.',
        latitud: 22.1089,
        longitud: -80.4567
    },
    {
        id: 4,
        titulo: 'Casa de Epoca Centro Historico',
        ubicacion: 'Centro Historico, Cienfuegos',
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
        descripcion: 'Joyita arquitectonica del siglo XIX en el casco historico de Cienfuegos, declarado Patrimonio de la Humanidad por la UNESCO.',
        latitud: 22.1210,
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
        descripcion: 'Penthouse de lujo en el emblematico Edificio Jagua. Terraza privada con jacuzzi, acabados de marmol y cocina abierta.',
        latitud: 22.1190,
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
        descripcion: 'Antigua finca restaurada con exquisitez a pocos minutos de las playas de Rancho Luna. Terrenos extensos con arboles frutales, casa principal y casa de huespedes.',
        latitud: 22.0987,
        longitud: -80.4345
    }
];

// ===== FAVORITOS =====
var favoritos = JSON.parse(localStorage.getItem('silvari_favoritos')) || [];

function guardarFavoritos() {
    localStorage.setItem('silvari_favoritos', JSON.stringify(favoritos));
}

function toggleFavorito(id, event) {
    event.preventDefault();
    event.stopPropagation();
    var boton = event.currentTarget;
    var index = favoritos.indexOf(id);
    if (index > -1) {
        favoritos.splice(index, 1);
        boton.classList.remove('activo');
    } else {
        favoritos.push(id);
        boton.classList.add('activo');
    }
    guardarFavoritos();
}

// ===== FORMATEAR PRECIO =====
function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('en-US') + ' USD';
}

// ===== ABRIR WHATSAPP =====
function abrirWhatsApp() {
    window.open('https://wa.me/5355415547?text=Hola%20me%20interesa%20conocer%20mas%20sobre%20las%20propiedades', '_blank');
}

// ===== CREAR TARJETA =====
function crearTarjeta(propiedad) {
    var articulo = document.createElement('article');
    articulo.className = 'tarjeta-propiedad';
    var esFavorito = favoritos.indexOf(propiedad.id) > -1;
    
    articulo.innerHTML = '<div class="tarjeta-imagen-container">' +
        '<img src="' + propiedad.imagen + '" alt="' + propiedad.titulo + '" class="tarjeta-imagen" loading="lazy">' +
        '<span class="tarjeta-etiqueta ' + (propiedad.estado === 'disponible' ? 'disponible' : 'vendido') + '">' + (propiedad.estado === 'disponible' ? 'Disponible' : 'Vendido') + '</span>' +
        '<button class="tarjeta-favorito ' + (esFavorito ? 'activo' : '') + '"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>' +
        '</div>' +
        '<div class="tarjeta-info">' +
        '<h3 class="tarjeta-titulo">' + propiedad.titulo + '</h3>' +
        '<p class="tarjeta-ubicacion">' + propiedad.ubicacion + '</p>' +
        '<p class="tarjeta-precio">' + formatearPrecio(propiedad.precio) + '</p>' +
        '<div class="tarjeta-caracteristicas">' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> ' + propiedad.habitaciones + ' Hab.</span>' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> ' + propiedad.banos + ' Banos</span>' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> ' + propiedad.metros + 'm²</span>' +
        '</div>' +
        '<div class="tarjeta-acciones">' +
        '<a href="detalle-casa.html?id=' + propiedad.id + '" class="btn-ver-detalle">Ver Detalle</a>' +
        '<a href="https://wa.me/5355415547?text=Hola%20me%20interesa%20la%20propiedad%20' + encodeURIComponent(propiedad.titulo) + '" class="btn-whatsapp-tarjeta" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg> Consultar</a>' +
        '</div></div>';
    
    var btnFavorito = articulo.querySelector('.tarjeta-favorito');
    btnFavorito.addEventListener('click', function(e) { toggleFavorito(propiedad.id, e); });
    
    return articulo;
}

// ===== RENDERIZAR PROPIEDADES =====
function renderizarPropiedades(lista) {
    lista = lista || propiedades;
    var grid = document.getElementById('propiedades-grid');
    if (!grid) return;
    grid.innerHTML = '';
    for (var i = 0; i < lista.length; i++) {
        grid.appendChild(crearTarjeta(lista[i]));
    }
}

// ===== PÁGINA DE DETALLE =====
var imagenActual = 0;
var propiedadDetalle = null;

function cambiarImagen(dir) {
    if (!propiedadDetalle) return;
    imagenActual = (imagenActual + dir + propiedadDetalle.imagenes.length) % propiedadDetalle.imagenes.length;
    actualizarGaleria();
}

function irAImagen(idx) {
    if (!propiedadDetalle) return;
    imagenActual = idx;
    actualizarGaleria();
}

function actualizarGaleria() {
    if (!propiedadDetalle) return;
    var imagenes = document.querySelectorAll('.galeria-imagen');
    var dots = document.querySelectorAll('.galeria-dot');
    var contador = document.querySelector('.galeria-contador');
    for (var i = 0; i < imagenes.length; i++) {
        if (i === imagenActual) {
            imagenes[i].classList.add('activa');
        } else {
            imagenes[i].classList.remove('activa');
        }
    }
    for (var j = 0; j < dots.length; j++) {
        if (j === imagenActual) {
            dots[j].classList.add('activo');
        } else {
            dots[j].classList.remove('activo');
        }
    }
    if (contador) {
        contador.textContent = (imagenActual + 1) + ' / ' + propiedadDetalle.imagenes.length;
    }
}

function cargarDetalle() {
    var contenedor = document.getElementById('detalle-contenido');
    if (!contenedor) return;
    
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('id'));
    
    propiedadDetalle = null;
    for (var i = 0; i < propiedades.length; i++) {
        if (propiedades[i].id === id) {
            propiedadDetalle = propiedades[i];
            break;
        }
    }
    
    if (!propiedadDetalle) {
        contenedor.innerHTML = '<div class="container" style="text-align:center;padding:80px 0"><h2>Propiedad no encontrada</h2><p style="margin:16px 0">La propiedad que buscas no esta disponible.</p><a href="index.html" class="btn-cta">Volver al Inicio</a></div>';
        return;
    }
    
    imagenActual = 0;
    document.title = propiedadDetalle.titulo + ' | Silvari Inmobiliaria';
    
    var imgsHTML = '';
    var dotsHTML = '';
    for (var j = 0; j < propiedadDetalle.imagenes.length; j++) {
        imgsHTML += '<img src="' + propiedadDetalle.imagenes[j] + '" alt="' + propiedadDetalle.titulo + ' - Imagen ' + (j + 1) + '" class="galeria-imagen' + (j === 0 ? ' activa' : '') + '">';
        dotsHTML += '<button class="galeria-dot' + (j === 0 ? ' activo' : '') + '" onclick="irAImagen(' + j + ')"></button>';
    }
    
    var mapaURL = 'https://www.openstreetmap.org/export/embed.html?bbox=' + (propiedadDetalle.longitud - 0.005) + '%2C' + (propiedadDetalle.latitud - 0.005) + '%2C' + (propiedadDetalle.longitud + 0.005) + '%2C' + (propiedadDetalle.latitud + 0.005) + '&layer=mapnik&marker=' + propiedadDetalle.latitud + '%2C' + propiedadDetalle.longitud;
    
    contenedor.innerHTML = '<div class="container">' +
        '<div class="breadcrumb"><a href="index.html">Inicio</a><span> › </span><a href="index.html#propiedades">Propiedades</a><span> › </span><span class="actual">' + propiedadDetalle.titulo + '</span></div>' +
        '<div class="galeria">' + imgsHTML +
        '<div class="galeria-dots">' + dotsHTML + '</div>' +
        '<div class="galeria-controles">' +
        '<button class="galeria-btn" onclick="cambiarImagen(-1)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>' +
        '<span class="galeria-contador">1 / ' + propiedadDetalle.imagenes.length + '</span>' +
        '<button class="galeria-btn" onclick="cambiarImagen(1)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>' +
        '</div></div>' +
        '<div class="detalle-grid">' +
        '<div class="detalle-info">' +
        '<h1>' + propiedadDetalle.titulo + '</h1>' +
        '<div class="detalle-ubicacion"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + propiedadDetalle.ubicacion + '</div>' +
        '<span class="detalle-etiqueta ' + (propiedadDetalle.estado === 'disponible' ? 'disponible' : 'vendido') + '">' + (propiedadDetalle.estado === 'disponible' ? 'Disponible' : 'Vendido') + '</span>' +
        '<div class="detalle-precio">' + formatearPrecio(propiedadDetalle.precio) + '</div>' +
        '<div class="detalle-descripcion"><p>' + propiedadDetalle.descripcion + '</p></div>' +
        '<div class="detalle-caracteristicas">' +
        '<div class="detalle-caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg><div class="detalle-caracteristica-texto"><strong>' + propiedadDetalle.habitaciones + '</strong>Habitaciones</div></div>' +
        '<div class="detalle-caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><div class="detalle-caracteristica-texto"><strong>' + propiedadDetalle.banos + '</strong>Baños</div></div>' +
        '<div class="detalle-caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg><div class="detalle-caracteristica-texto"><strong>' + propiedadDetalle.metros + ' m²</strong>Superficie</div></div>' +
        '<div class="detalle-caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><div class="detalle-caracteristica-texto"><strong>' + propiedadDetalle.ubicacion.split(',')[0] + '</strong>Zona</div></div>' +
        '</div>' +
        '<h3 style="font-size:20px;font-weight:600;margin-bottom:16px">Ubicacion</h3>' +
        '<div class="detalle-mapa"><iframe src="' + mapaURL + '" width="100%" height="280" style="border:0" allowfullscreen loading="lazy"></iframe></div>' +
        '</div>' +
        '<div class="detalle-sidebar"><div class="sidebar-card">' +
        '<h3>¿Te interesa esta propiedad?</h3>' +
        '<div class="sidebar-precio">' + formatearPrecio(propiedadDetalle.precio) + '</div>' +
        '<a href="https://wa.me/5355415547?text=Hola%20me%20interesa%20la%20propiedad%20' + encodeURIComponent(propiedadDetalle.titulo) + '" class="btn-contactar btn-whatsapp-detalle" target="_blank"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg> Contactar por WhatsApp</a>' +
        '<a href="mailto:silvari2026@gmail.com?subject=Consulta%20sobre%20' + encodeURIComponent(propiedadDetalle.titulo) + '" class="btn-contactar btn-correo-detalle"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Enviar Correo</a>' +
        '<a href="index.html#propiedades" class="btn-volver"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Volver a Propiedades</a>' +
        '</div></div></div></div>';
}

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded', function() {
    renderizarPropiedades();
    cargarDetalle();
    
    var btnFiltrar = document.querySelector('.btn-filtrar');
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function() {
            var selects = document.querySelectorAll('.filtro-select');
            var tipo = selects[0] ? selects[0].value : '';
            var precioMax = selects[1] ? selects[1].value : '';
            var habitaciones = selects[2] ? selects[2].value : '';
            var filtradas = [];
            for (var i = 0; i < propiedades.length; i++) {
                var p = propiedades[i];
                if (p.estado !== 'disponible') continue;
                if (tipo && p.titulo.toLowerCase().indexOf(tipo) === -1) continue;
                if (precioMax && p.precio > parseInt(precioMax)) continue;
                if (habitaciones && p.habitaciones < parseInt(habitaciones)) continue;
                filtradas.push(p);
            }
            renderizarPropiedades(filtradas);
            var grid = document.getElementById('propiedades-grid');
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});