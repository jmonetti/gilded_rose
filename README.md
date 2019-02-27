# Gilded Rose Kata
The Gilded Rose Kata in many programming languages.

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

* All items have a SellIn value which denotes the number of days we have to sell the item
* All items have a Quality value which denotes how valuable the item is
* At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* "Aged Brie" actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
* "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;

  Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* "Conjured" items degrade in Quality twice as fast as normal items


Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.

[This is the original Kata repository](https://github.com/emilybache/GildedRose-Refactoring-Kata) created by EmilyBache

# Kata Gilded Rose

Tenemos un sistema de inventario desarrollado por un tipo un tanto peculiar y con poco sentido común llamado Leeory, ahora esta persiguiendo nuevas aventuras!, tanta paz lleves como descanso dejas amigo Leeroy!. Tu tarea consiste en añadir una nueva funcionalidad al sistema para que podamos empezar a vender una nueva categoría de items. Para empezar una pequeña introducción a nuestro sistema:

* Todos los items tienen una fecha de venta, SellIn , que especifica el número de días que tenemos para vender el item.
* Todos los items tienen una calidad , Quality , que especifica el valor que tiene un item.
* Al final del día el sistema reduce los valores para los dos valores de cada item.

Simple ¿no?, ahora empieza lo interesante:

* Los items degradan la calidad en una unidad por cada actualización.
* Cuando la fecha de venta a pasado, la calidad degrada al doble de velocidad.
* La calidad de un item no es nunca negativa.
* El item "aged brie" incrementa su calidad en lugar de decrementarla según pasan los días.
* La calidad de un item nunca es mayor de 50.
* El item "Sulfuras", nuestro articulo más legendario!, nunca debe venderse ni disminuye su calidad.
* Los "backstage passes" incrementan su calidad conforme se aproxima la fecha de venta. La calidad se incrementa por dos cuando quedan 10 días o menos para el concierto, por 3 cuando quedan 5 días o menos. Sin embargo la calidad disminuye a 0 después del concierto.


Hemos firmado un nuevo acuerdo para vender items "conjured", sin embargo necesitamos un cambio en el sistema:

* Los items "conjured" disminuyen de calidad el doble de rápido que el resto.

Por supuesto puedes hacer cualquier cambio al método updateQuality si lo consideras necesario mientras que todo siga funcionando claro esta!. Sin embargo hay dos cosas que no puedes hacer:

* Cambiar el interfaz y la forma de uso de GildedRose (la función update_quality), es fea, lo sabemos, pero tenemos muchos sistemas que la utilizan y no vamos a cambiarlos todos ahora!
* ¡No puedes tocar la clase item!. Pertenece a una especie de goblin asesino que no cree en cosas como la propiedad colectiva del código.

[Este es el repo del Kata original](https://github.com/emilybache/GildedRose-Refactoring-Kata) creado por EmilyBache

## JavaScript

just open on the browser:

```
js/SpecRunner.html
```
## Python
```
py.test test_gilded_rose.py
```

## Ruby
```
gem install rspec

rspec gilded_rose_spec.rb
```

## Java
```
sudo chmod a+x gradlew

./gradlew

./gradlew test
```
Open test report/results file on:  
```
java/build/reports/tests/classes/com.gildedrose.GildedRoseSpec.html#Gilded Rose
```
