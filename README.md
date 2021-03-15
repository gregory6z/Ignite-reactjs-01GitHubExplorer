# Ignite-reactjs-01GitHubExplore

## Concepts Importants

### ajouté le React Refresh Webpack plugin

Lorsque nous sauvegardons après avoir changé un code  
le webpack renouvelle l'ensemble de l'application perdant ainsi toutes  
les actions effectuées et l'état, le refresh webpack a été créée pour résoudre  
ce problème et enregistrer tous les états déjà créés.

#### installation:

`yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refreshyarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`

dans la configuration plugin: ligne22

`isDevelopment && new ReactRefreshWebpackPlugin(),`

ici, lorsque nous vérifions et est en production,  
cela deviendra faux et ne s'exécutera pas pour résoudre ce problème,
nous utilisons le:

`.filter(Boolean)`
