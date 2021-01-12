let app = new Vue({
  el: "#root",
  data: {
    catalogue: [],
    search: "",

  },
  methods:{
    findFilm(search){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=f3beb21edfeef2609cba7bea4c175d1d&language=it-IT&query=" + search)
      .then(response => {
        this.catalogue = response.data.results;
        console.log(this.catalogue);
      })
    }
  }
});
