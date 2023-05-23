# Implémenter un Factory Pattern

- Le Factory Pattern est utilisé pour déléguer la création d’objets. Au lieu de créer vos objets “en direct”, vous passez par un autre objet (la Factory) qui va se charger de créer le bon objet.

- Pour créer un Factory Pattern, vous devez créer un dossierfactories et instancier les objets directement depuis le bon constructeur de la Factory.

- Attention à l’utilisation de ce dernier, qui a tendance à fortement complexifier la base de code.

## Exemple du projet Filmo Patterns

![Représentation du factory Pattern utilisé en exemple](https://user.oc-static.com/upload/2021/10/14/16342066059486_p2c2-1.png)

Dans le diagramme ci-dessus, vous pouvez voir que le Factory Pattern est composé des éléments suivants :

(**La Factory.**) Elle va récupérer les données qui lui seront passées, et va déléguer la création et le formatage de ces données au bon Constructor. Ici, les données sont celles des fichiers `new-movie-data.json` et `external-movie-data.json`.

(**Les objets**) qui vont être créés par la Factory. Dans notre cas, nous allons avoir deux Constructor Patterns. Un qui existe déjà (Movie.js) et l’autre qui reste à créer. Ils vont formater la donnée pour nous. Ils vont l’envoyer dans notre fichier de template `MovieCard` sans que ce dernier ait de traitements supplémentaires à réaliser.

## Utilisez des design patterns en JavaScript

Cours [Utilisez des design patterns en JavaScript](https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript), par @tdimnet, chapitre [Déléguez la création des objets avec le Factory Pattern](https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript/7478442-deleguez-la-creation-des-objets-avec-le-factory-pattern) sur OpenClassrooms.

### Lien GitHub Pages :
[Projet Filmo Patterns](https://olafswan.github.io/Factory-Pattern-Example/index.html)
