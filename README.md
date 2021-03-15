# Ignite-reactjs-01GitHubExplore

## Concepts Importants

### useEffect

il déclenche une fonction dès que quelque chose se passe dans l'application

#### par exemple:

lorsqu'une variable change, je souhaite envoyer une réponse à une API  
qui entend un changement ou déclenche une fonction dans mon système

#### composition

useEffect reçoit deux paramètres.
le premier quelle fonction je veux effectuer, et le second est quand je veux exécuter cette première fonction;

array de dependances  
si nous le passons vide, la fonction ne sera exécutée qu'une seule fois  
dès que le composant est affiché à l'écran  
pourquoi quand il est vide il n'y a rien quand  
vous entendez les changements à exécuter à nouveau

#### attention:

quand nous ne passons pas le deuxieme [] paramètre, il entrera en loop
