import '../src/style.css';

const images = import.meta.glob( '../src/assets/CSE_Figures/*.png', { eager: true, import: 'default' } )

document.getElementById( 'images' ).insertAdjacentHTML( 'beforeend', [ ...Object.values( images ) ].map( dir => `<img class="figure-images" src="${dir}"/>` ).join( "" ) ) 