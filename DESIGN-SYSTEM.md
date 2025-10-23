# Sistema de Diseño HARDY

Este documento describe el sistema de diseño modularizado de la marca HARDY.

## 📋 Índice

- [Paleta Cromática](#paleta-cromática)
- [Tipografía](#tipografía)
- [Cómo Usar](#cómo-usar)

## 🎨 Paleta Cromática

### Colores Principales

**Rojo HARDY (Primary)**
- Hex: `#ED3237`
- CMYK: C:0, M:90, Y:75, K:0
- RGB: 237, 50, 55
- Uso: Color principal de marca, CTAs, títulos principales

**Amarillo (Secondary)**
- Hex: `#FFCD00`
- CMYK: C:0, M:20, Y:90, K:0
- RGB: 255, 205, 0
- Uso: Acentos, taglines, botones secundarios

**Morado (Accent)**
- Hex: `#4E377F`
- CMYK: C:85, M:90, Y:15, K:0
- RGB: 78, 55, 127
- Uso: Fondos especiales, secciones destacadas

### Colores Complementarios

- **Azul**: `#00B9FF` (C:68, M:10, Y:0, K:0)
- **Verde**: `#11BF7E` (C:72, M:0, Y:65, K:0)
- **Rosa**: `#FF0E2A` (C:0, M:95, Y:75, K:0)

### Colores Neutros

- **Negro**: `#242424` (K:85)
- **Blanco**: `#FFFFFF`
- **Grises**: Para textos secundarios y fondos

## ✍️ Tipografía

### Familia Tipográfica: DIN

La tipografía DIN es la fuente oficial de HARDY. Es una sans-serif moderna que transmite el concepto deportivo y dinámico de la marca.

**Pesos disponibles:**
- **Light** (300): Textos secundarios
- **Regular** (400): Texto de cuerpo
- **Medium** (500): Destacados suaves
- **Bold** (700): Subtítulos, énfasis
- **Black** (900): Títulos principales, logotipo

## 🛠️ Cómo Usar el Sistema de Diseño

### 1. Usar Clases de Tailwind

```jsx
// Colores
<div className="bg-primary text-white">...</div>
<div className="bg-secondary text-hardy-black">...</div>

// Tipografía
<h1 className="font-black text-6xl">Título</h1>
<p className="font-medium text-lg">Párrafo</p>

// Botones predefinidos
<button className="btn-primary">CTA Principal</button>
<button className="btn-secondary">CTA Secundario</button>
```

### 2. Elementos Gráficos de Marca

**Íconos de Marca:**
- Frasco: Símbolo icónico de energía contenida
- Líneas diagonales: Representan dinamismo y movimiento
- Texturas de maní: Para fondos y detalles

**Patrones:**
```jsx
// Patrón de líneas diagonales
<div style={{
  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)`
}} />
```

## 📝 Identidad de Marca

### Eslóganes

- **Tagline principal**: "Alimentá tu instinto"
- **Eslogan**: "Go Hardy or Go Home"
- **Variantes en inglés**:
  - "Eat Hardy, Train Harder"
  - "Live to the fullest, focus on the positive"

### Tono de Comunicación

- **Imperativo**: Uso de verbos en imperativo (Alimentá, Rompé, Sentí)
- **Motivacional**: Mensajes que impulsan a la acción
- **Directo**: Sin rodeos, al grano
- **Deportivo**: Lenguaje del mundo fitness y entrenamiento

### Arquetipo: El Héroe

- **Lema**: "Sin voluntad no hay camino"
- **Deseo básico**: Demostrar la propia valía a través de actos valientes
- **Objetivo**: Superarse a sí mismo y mejorar el mundo con sus actos
- **Estrategia**: Ser tan fuerte y competente como sea posible

## 🎯 Principios de Diseño

1. **Dinamismo**: Usar elementos diagonales, movimiento y energía
2. **Síntesis**: El frasco como elemento icónico central
3. **Tensión**: Crear sensación de energía contenida lista para explotar
4. **Expansión**: Elementos que sugieren crecimiento y superación

---

**Nota**: Este sistema de diseño está basado en el Manual Digital HARDY 2018 de MANDARiNA.
