# petit-tuto utilisation du store Vuex

## Le store de Vue

• Voir la [Document Officielle](https://v3.vuejs.org/guide/state-management.html#simple-state-management-from-scratch)

• Lorsque plusieurs vue utilise la même variable, afin de pouvouir changer cette dernière et update sa valeur dans chacune des vues l'utilisant de manière réactive, Vue.js nous offre une méthode permettant de stocker cette variable dans un seule endroit (le store) ou l'on pourra récupérer son état est l'update selon nos besoin.

• Cependant la mise en place de ce store doit se faire from scratch, ce qui n'est pas vraiment pratique, c'est pourquoi nous pouvons faire appelle à Vuex qui nous offre une architecture de store déjà mise en place et très pratique.


## Installer Vuex

• A la creation du projet vue, choisir une installation manuelle et sélectionner l'option Vuex
    Ou
• Après la creation du projet vue, installer Vuex manuellemnt avec la commande:

```
npm install vuex --save
```

**Vérifier que Vuex est bien installer**

• Dans le fichier package.json s'assurer que vuex apparait dans les dependencies. On peut également vérifier la version de vuex utiliser.

• On peut également vérifier cala dans le fichier package-lock.json, dans package: dépendancies.


**Utiliser vuex dans notre projet vue**

Pour installez Vuex veuillez regarder la [Documentation Officielle](https://vuex.vuejs.org/installation.html#direct-download-cdn)

• Pour pouvoir utiliser vuex globalement on va devoir importer le store et l'utiliser dès la création du projet. Donc dans le fichier main.js :

```
import store from "./store";

createApp(App).use(store)
```


• Pour utiliser le store de vuex dans le dossier src/store, dans le fichier index.js :

```
import { createStore } from "vuex";

export default createStore({
state: {},
mutations: {},
actions: {},
modules: {},
});
```


## Utiliser le Store Vuex

**Appeler le store**

• Une fois le store importer globalement, on va pouvoir faire appelle a n'importe quel variable ou méthode du store depuis n'importe quel composant de notre projet avec la commande:

```
this.$store
```


**L'état du store**

• Voir la [Document Officielle](https://vuex.vuejs.org/guide/state.html#single-state-tree)

• C'est ici que nous retrouverons les varibles de notre store. Ex:

```
state: {
    count: 0
}
```

• Pour accéder à cette variable dans nos views, on appelera l'état de notre store:

```
this.$store.state //renvoie 0
```

**Les méthodes computed et watchers**

• Voir la [Document Officielle](https://v3.vuejs.org/guide/computed.html#computed-properties)

• Pour accéder à l'état de notre store dans nos views et update nos varibles directement aux changement de notre store, on peut faire appelle aux méthodes computed ou watch: Ex:

```
computed: {
    Count() {
        return this.$store.state.count
    }
}
```
• Grace à cette méthode, la valeur de Count sera automatiquement mise a jour lorsque la valeur de count dans notre store sera changer.

• Notre Count pourra dès lors être appelé dans nos template comme n'importe quel variable renvoyé dans les data. Ex:

```
<template>
    {{Count}}
</template>
```

• Les watchers fonctionne de la même manière mais supportent des méthodes plus lourdes et complexent ainsi que des méthodes asynchronent.


**Les Getters**

• Voir la [Document Officielle](https://vuex.vuejs.org/guide/getters.html)

• Ils nous permettrons de renvoyer un état dérivé de notre store (par exemple filtrer une variable du store) accessible facilement et globalement.

• Cela sera particulièrement utile si plusieurs vues doivent faire appelle à la même variable filtrer par exemple. Plûtot que de créer deux méthodes identique dans deux views différentes, nous allons créer une seule méthode dans nos getter qui renverra la varibel filtrer.

• Cependant, nous n'utiliserons pas cette méthode dans ce tuto.


**Les mutations**

• Voir la [Document Officielle](https://vuex.vuejs.org/guide/mutations.html)

• C'est ici que nous mettrons nos méthodes pour changer l'état de notre store. Ex:

```
mutations: {
    Increment(state) {
        state.count ++ //incremente la variable count dans l'état (state) de notre store de 1
    }
}
```

• Les mutations prendrons toujours comme premier argument state qui nous permettra de changer l'état du store

• Les mutations n'acceptent que des fonctions synchrones!

• Nos mutations pourront être appelés via la fonctions commit intégrés dans notre store vuex. Ex:

```
this.$store.commit('Increment') //appelle à la mutation Increment depuis une views
```


**Les actions**

• Voir la [Document Officielle](https://vuex.vuejs.org/guide/actions.html)

• C'est ici que nous mettrons nos fonctions asynchronent. Ces fonctions pourront servir a commit des mutations. Ex:

```
actions: {
  IncrementAsync (context) {
    setTimeout(() => {
      context.commit('Increment') //après une seconde appelle la mutation Increment
    }, 1000)
  }
}
```

• Les mutations prendrons toujours comme premier argument context qui nous permettra d'accéder à toutes les méthodes natives de notre store

• Nous pouvons aussi accéder directement à une méthode voulue grâce à la déconstruction d'objet. Ex:

```
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

• Nos mutations pourront être appelés via la fonctions dispatch intégrés dans notre store vuex. Ex:

```
this.$store.dispatch('incrementAsync)
```

**Les modules**

• Comme notre store n'a qu'un seule état, il peut vite devenir très lourd et chargé lors de gros projet avec de nombreuses vues, c'est pourquoi vuex nous offre la possibilité de séparer notre store en plusieurs morceaux graces aux modules.

• Cette option ne sera pas utiliser dans ce tuto, pour en apprendre plus veuillez vous réfférer à la [Documentation Officielle](https://vuex.vuejs.org/guide/modules.html)

# Merci Pour avoir suivi ce petit Tuto!