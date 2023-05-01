# Aula 14 - Design Adaptativo

## Medidas relativas

### Porcentagem 

### Em | rem

Em : relativo ao elemento pai

Rem : root  (elemento raiz)

html {
  font-size: 14px;
}

Viewport: 
- vw o viewport width é relativo à largura total do viewport.
- vh o viewport height é relativo à altura total do viewport.


### Media queries

max-width - tudo que estiver abaixo. 
min-width - tudo que for maior.

#### Breakpoints 

- 0 a 480px -> pequenos smarphones 
- 481 a 768px -> tablets e grandes smartphones
- 769 a 1279px -> notebooks, grandes tablets e pequenos desktops
- >= 1280px grandes desktops e monitores

- Mobile first 

@media (min-width: 460px){
    /* Tablets */
}
@media (min-width: 768px){
    /* Laptop */
}


- Mobile last

@media (max-width: 768px){
    /* Tablets */
}
@media (max-width: 460px){
    /* Smartphones */
}
