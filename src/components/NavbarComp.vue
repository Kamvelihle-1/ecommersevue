<template>
    <div class="sticky-top">
        
        <nav class="row">
            <div class="col-1">
                <img src="https://i.postimg.cc/908gMXjK/K.png" alt="logo" >    
            </div>
            <div class="col-1 pt-3">
                <h3 class="navbar-brand " >Future Properties</h3>
            </div>
          
            <div class="col pt-3 navigations" id="navigation">
                <router-link class="navbar-link" to="/">Home</router-link> 
                <router-link @click="getProducts" class="navbar-link" to="/products">Products</router-link> 
                <router-link class="navbar-link" to="/admin">Admin</router-link> 
                <router-link class="navbar-link" to="/checkout">Wish-list</router-link> 
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="navigations" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
        
          </nav>
    </div>
</template>

<script>
    export default {
        
        methods: {
            getProducts(){
                this.$store.dispatch('getProducts')
            }
        }
        
    }
</script>

<style scoped>
.navbar-link{
    text-decoration: none;
    margin: 1rem;
}
.navbar-link:hover{
    padding: 1rem;
    background-color: #1f1e1e;
    color: white;
    border-radius: .5rem;
    transform: translateY(-0.5rem);
    transition: top 0.9s;

}

img{
    max-width: 3rem;
    clip-path: circle();
}

</style>