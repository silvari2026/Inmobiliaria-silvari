// ===== DATOS DE PROPIEDADES =====
var propiedades = [
    // VENTA
    {
        id: 1, titulo: 'Casa Colonial en Punta Gorda', ubicacion: 'Punta Gorda, Cienfuegos',
        precio: 180000, precioMostrar: '$180,000 USD', tipo: 'venta',
        habitaciones: 4, banos: 3, metros: 240, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80','https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80'],
        descripcion: 'Hermosa casa colonial restaurada en el corazon de Punta Gorda. Conserva sus detalles arquitectonicos originales combinados con comodidades modernas.',
        latitud: 22.1132, longitud: -80.4532
    },
    {
        id: 2, titulo: 'Villa Moderna en La Punta', ubicacion: 'La Punta, Cienfuegos',
        precio: 250000, precioMostrar: '$250,000 USD', tipo: 'venta',
        habitaciones: 5, banos: 4, metros: 380, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80','https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80'],
        descripcion: 'Espectacular villa de diseno contemporaneo con piscina privada y jardin tropical.',
        latitud: 22.1089, longitud: -80.4567
    },
    {
        id: 3, titulo: 'Casa de Epoca Centro Historico', ubicacion: 'Centro Historico, Cienfuegos',
        precio: 150000, precioMostrar: '$150,000 USD', tipo: 'venta',
        habitaciones: 3, banos: 2, metros: 200, estado: 'vendido',
        imagen: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80','https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80'],
        descripcion: 'Joyita arquitectonica del siglo XIX en el casco historico de Cienfuegos, Patrimonio de la Humanidad.',
        latitud: 22.1210, longitud: -80.4489
    },
    {
        id: 4, titulo: 'Finca Restaurada Rancho Luna', ubicacion: 'Rancho Luna, Cienfuegos',
        precio: 320000, precioMostrar: '$320,000 USD', tipo: 'venta',
        habitaciones: 6, banos: 5, metros: 520, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'],
        descripcion: 'Antigua finca restaurada a pocos minutos de playas. Terrenos extensos con arboles frutales.',
        latitud: 22.0987, longitud: -80.4345
    },
    // ALQUILER DE CASAS
    {
        id: 5, titulo: 'Apartamento Vista al Mar', ubicacion: 'Malecon, Cienfuegos',
        precio: 500, precioMostrar: '$500 USD / mes', tipo: 'alquiler',
        habitaciones: 2, banos: 2, metros: 120, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'],
        descripcion: 'Moderno apartamento con vista panoramica al mar Caribe. Totalmente equipado.',
        latitud: 22.1156, longitud: -80.4510
    },
    {
        id: 6, titulo: 'Penthouse Edificio Jagua', ubicacion: 'Paseo del Prado, Cienfuegos',
        precio: 800, precioMostrar: '$800 USD / mes', tipo: 'alquiler',
        habitaciones: 3, banos: 2, metros: 160, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600566753086-4df530c79ef8?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600566753086-4df530c79ef8?w=800&q=80','https://images.unsplash.com/photo-1600573472562-36d9c0e46a2b?w=800&q=80'],
        descripcion: 'Penthouse de lujo en el emblematico Edificio Jagua. Terraza privada con jacuzzi.',
        latitud: 22.1190, longitud: -80.4498
    },
    {
        id: 7, titulo: 'Casa de Playa Rancho Luna', ubicacion: 'Rancho Luna, Cienfuegos',
        precio: 1200, precioMostrar: '$1,200 USD / mes', tipo: 'alquiler',
        habitaciones: 4, banos: 3, metros: 200, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80','https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'],
        descripcion: 'Hermosa casa frente a la playa. Terraza con vista al mar y acceso directo.',
        latitud: 22.0987, longitud: -80.4345
    },
    // ALQUILER DE HABITACIONES
    {
        id: 8, titulo: 'Habitacion en Punta Gorda', ubicacion: 'Punta Gorda, Cienfuegos',
        precio: 150, precioMostrar: '$150 USD / mes', tipo: 'habitacion',
        habitaciones: 1, banos: 1, metros: 25, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'],
        descripcion: 'Habitacion amplia y luminosa en casa colonial. Acceso a areas comunes. Ideal para profesionales.',
        latitud: 22.1132, longitud: -80.4532
    },
    {
        id: 9, titulo: 'Habitacion Centro Cienfuegos', ubicacion: 'Centro, Cienfuegos',
        precio: 100, precioMostrar: '$100 USD / mes', tipo: 'habitacion',
        habitaciones: 1, banos: 1, metros: 20, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'],
        descripcion: 'Habitacion comoda en el centro de la ciudad. Cerca de todos los servicios y transporte.',
        latitud: 22.1190, longitud: -80.4498
    },
    {
        id: 10, titulo: 'Habitacion con Vista al Mar', ubicacion: 'Malecon, Cienfuegos',
        precio: 200, precioMostrar: '$200 USD / mes', tipo: 'habitacion',
        habitaciones: 1, banos: 1, metros: 30, estado: 'disponible',
        imagen: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
        imagenes: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'],
        descripcion: 'Habitacion con vista al mar en apartamento compartido. Cocina equipada y terraza.',
        latitud: 22.1156, longitud: -80.4510
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
    if (index > -1) { favoritos.splice(index, 1); boton.classList.remove('activo'); }
    else { favoritos.push(id); boton.classList.add('activo'); }
    guardarFavoritos();
}

// ===== ABRIR WHATSAPP =====
function abrirWhatsApp() {
    window.open('https://wa.me/5355415547?text=Hola%20me%20interesa%20conocer%20mas%20sobre%20las%20propiedades', '_blank');
}

// ===== ETIQUETA SEGUN TIPO =====
function obtenerEtiqueta(propiedad) {
    if (propiedad.estado === 'vendido') return { clase: 'vendido', texto: 'Vendido' };
    if (propiedad.tipo === 'venta') return { clase: 'venta', texto: 'En Venta' };
    if (propiedad.tipo === 'alquiler') return { clase: 'alquiler', texto: 'En Alquiler' };
    if (propiedad.tipo === 'habitacion') return { clase: 'habitacion', texto: 'Habitacion en Alquiler' };
    return { clase: 'venta', texto: 'Disponible' };
}

// ===== CREAR TARJETA =====
function crearTarjeta(propiedad) {
    var articulo = document.createElement('article');
    articulo.className = 'tarjeta-propiedad';
    var esFavorito = favoritos.indexOf(propiedad.id) > -1;
    var etiqueta = obtenerEtiqueta(propiedad);
    
    articulo.innerHTML = '<div class="tarjeta-imagen-container">' +
        '<img src="' + propiedad.imagen + '" alt="' + propiedad.titulo + '" class="tarjeta-imagen" loading="lazy">' +
        '<span class="tarjeta-etiqueta ' + etiqueta.clase + '">' + etiqueta.texto + '</span>' +
        '<button class="tarjeta-favorito ' + (esFavorito ? 'activo' : '') + '"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></button>' +
        '</div>' +
        '<div class="tarjeta-info">' +
        '<h3 class="tarjeta-titulo">' + propiedad.titulo + '</h3>' +
        '<p class="tarjeta-ubicacion">' + propiedad.ubicacion + '</p>' +
        '<p class="tarjeta-precio">' + propiedad.precioMostrar + '</p>' +
        '<div class="tarjeta-caracteristicas">' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> ' + propiedad.habitaciones + ' Hab.</span>' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> ' + propiedad.banos + ' Banos</span>' +
        '<span class="caracteristica"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg> ' + propiedad.metros + 'm²</span>' +
        '</div>' +
        '<div class="tarjeta-acciones">' +
        '<a href="detalle-casa.html?id=' + propiedad.id + '" class="btn-ver-detalle">Ver Detalle</a>' +
        '<a href="https://wa.me/5355415547?text=Hola%20me%20interesa%20la%20propiedad%20' + encodeURIComponent(propiedad.titulo) + '" class="btn-whatsapp-tarjeta" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg> Consultar</a>' +
        '</div></div>';
    
    articulo.querySelector('.tarjeta-favorito').addEventListener('click', function(e) { toggleFavorito(propiedad.id, e); });
    return articulo;
}

// ===== RENDERIZAR =====
function renderizarPropiedades(lista) {
    lista = lista || propiedades;
    var grid = document.getElementById('propiedades-grid');
    if (!grid) return;
    grid.innerHTML = '';
    for (var i = 0; i < lista.length; i++) { grid.appendChild(crearTarjeta(lista[i])); }
}

// ===== FILTRAR POR CATEGORIA (PESTAÑAS) =====
function filtrarPorCategoria(categoria) {
    // Actualizar tabs
    var tabs = document.querySelectorAll('.filtro-tab');
    for (var t = 0; t < tabs.length; t++) { tabs[t].classList.remove('activo'); }
    event.target.classList.add('activo');
    
    var filtradas = [];
    var titulo = document.getElementById('titulo-propiedades');
    var subtitulo = document.getElementById('subtitulo-propiedades');
    
    if (categoria === 'todas') {
        filtradas = propiedades;
        if (titulo) titulo.textContent = 'Todas las Propiedades';
        if (subtitulo) subtitulo.textContent = 'Descubre nuestra seleccion de propiedades en las mejores zonas de Cienfuegos';
    } else if (categoria === 'venta') {
        for (var i = 0; i < propiedades.length; i++) { if (propiedades[i].tipo === 'venta') filtradas.push(propiedades[i]); }
        if (titulo) titulo.textContent = 'Venta de Casas';
        if (subtitulo) subtitulo.textContent = 'Propiedades en venta en Cienfuegos';
    } else if (categoria === 'alquiler') {
        for (var i = 0; i < propiedades.length; i++) { if (propiedades[i].tipo === 'alquiler') filtradas.push(propiedades[i]); }
        if (titulo) titulo.textContent = 'Alquiler de Casas';
        if (subtitulo) subtitulo.textContent = 'Casas y apartamentos en alquiler en Cienfuegos';
    } else if (categoria === 'habitacion') {
        for (var i = 0; i < propiedades.length; i++) { if (propiedades[i].tipo === 'habitacion') filtradas.push(propiedades[i]); }
        if (titulo) titulo.textContent = 'Alquiler de Habitaciones';
        if (subtitulo) subtitulo.textContent = 'Habitaciones disponibles para alquilar en Cienfuegos';
    }
    
    renderizarPropiedades(filtradas);
    var grid = document.getElementById('propiedades-grid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== PÁGINA DE DETALLE =====
var imagenActual = 0;
var propiedadDetalle = null;

function cambiarImagen(dir) {
    if (!propiedadDetalle) return;
    imagenActual = (imagenActual + dir + propiedadDetalle.imagenes.length) % propiedadDetalle.imagenes.length;
    actualizarGaleria();
}

function irAImagen(idx) { if (!propiedadDetalle) return; imagenActual = idx; actualizarGaleria(); }

function actualizarGaleria() {
    if (!propiedadDetalle) return;
    var imagenes = document.querySelectorAll('.galeria-imagen');
    var dots = document.querySelectorAll('.galeria-dot');
    var contador = document.querySelector('.galeria-contador');
    for (var i = 0; i < imagenes.length; i++) { imagenes[i].classList.toggle('activa', i === imagenActual); }
    for (var j = 0; j < dots.length; j++) { dots[j].classList.toggle('activo', j === imagenActual); }
    if (contador) contador.textContent = (imagenActual + 1) + ' / ' + propiedadDetalle.imagenes.length;
}

function cargarDetalle() {
    var contenedor = document.getElementById('detalle-contenido');
    if (!contenedor) return;
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('id'));
    propiedadDetalle = null;
    for (var i = 0; i < propiedades.length; i++) { if (propiedades[i].id === id) { propiedadDetalle = propiedades[i]; break; } }
    
    if (!propiedadDetalle) {
        contenedor.innerHTML = '<div class="container" style="text-align:center;padding:80px 0"><h2>Propiedad no encontrada</h2><p style="margin:16px 0">La propiedad que buscas no esta disponible.</p><a href="index.html" class="btn-cta">Volver al Inicio</a></div>';
        return;
    }
    
    imagenActual = 0;
    document.title = propiedadDetalle.titulo + ' | Silvari Inmobiliaria';
    var etiqueta = obtenerEtiqueta(propiedadDetalle);
    
    var imgsHTML = '', dotsHTML = '';
    for (var j = 0; j < propiedadDetalle.imagenes.length; j++) {
        imgsHTML += '<img src="' + propiedadDetalle.imagenes[j] + '" alt="Imagen ' + (j+1) + '" class="galeria-imagen' + (j===0?' activa':'') + '">';
        dotsHTML += '<button class="galeria-dot' + (j===0?' activo':'') + '" onclick="irAImagen(' + j + ')"></button>';
    }
    
    var mapaURL = 'https://www.openstreetmap.org/export/embed.html?bbox=' + (propiedadDetalle.longitud-0.005) + '%2C' + (propiedadDetalle.latitud-0.005) + '%2C' + (propiedadDetalle.longitud+0.005) + '%2C' + (propiedadDetalle.latitud+0.005) + '&layer=mapnik&marker=' + propiedadDetalle.latitud + '%2C' + propiedadDetalle.longitud;
    var whatsappMensaje = 'Hola, me interesa la propiedad: ' + propiedadDetalle.titulo + ' (' + propiedadDetalle.precioMostrar + ')';
    
    contenedor.innerHTML = '<div class="container">' +
        '<div class="breadcrumb"><a href="index.html">Inicio</a><span> › </span><a href="index.html#propiedades">Propiedades</a><span> › </span><span class="actual">' + propiedadDetalle.titulo + '</span></div>' +
        '<div class="galeria">' + imgsHTML + '<div class="galeria-dots">' + dotsHTML + '</div>' +
        '<div class="galeria-controles"><button class="galeria-btn" onclick="cambiarImagen(-1)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>' +
        '<span class="galeria-contador">1 / ' + propiedadDetalle.imagenes.length + '</span>' +
        '<button class="galeria-btn" onclick="cambiarImagen(1)"><svg width="20" height="20" viewBox="0