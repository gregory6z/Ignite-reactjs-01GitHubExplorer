# Ignite-reactjs-01GitHubExplore

## Concepts Importants

### La immutabilité dans le React

Consiste en pas changer le valeur de la variable,
mais en créer une autre avec le valeur
mise à jour, ça s'apelle immutabilité;

### Exemple :

#### sans immutabilité :

```javascript
users = ["Gregory", "Arthur", "Valesca"];
users.push("Beatriz");
```

--ici on fait une mutation dans la valeur de la variable n'entrant pas dans le facteur d'immuabilité

#### avec immutabilité

```javascript
users = ["Gregory", "Arthur", "Valesca"];
newUsers = [...users, "Beatriz"];
```

-- créer toujours un nouvel espace contenu dans <br>
la mémoire au lieu de modifier ce qui était déjà enregistré
