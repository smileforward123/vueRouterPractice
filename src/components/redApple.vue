<template>
    <div>
        this is red Apple
        <input type="button" @click='addCount'value="addCount"/>
        <input type="button" value="reduceCount" @click='reduceCount'/>
    </div>
</template>
<script>
export default({
  data(){
    return{
      price:2
    }
  },
  methods:{
    addCount(){
      this.$store.dispatch ('increase',this.price);
    },
    reduceCount(){
        this.$store.dispatch('reduce',this.price);
    }

  }



})
</script>