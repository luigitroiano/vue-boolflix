let app = new Vue({
  el: "#root",
  data: {
    catalogueMovie: [],
    catalogueSeries: [],
    search: "",
    firstLoadPage: ["zero", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  },
  mounted(){
    let rndLetter = Math.floor(Math.random() * 25) + 1;
    console.log(rndLetter);
    this.search = this.firstLoadPage[rndLetter];
    this.findFilmOrSeries(this.search);
    this.search = "";
  },
  methods:{
    findFilmOrSeries(search){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=f3beb21edfeef2609cba7bea4c175d1d&language=it-IT&query=" + search)
      .then(response => {
        this.catalogueMovie = response.data.results;
        console.log(this.catalogueMovie);
        this.catalogueMovie.forEach(element => {
          let vote = Math.ceil(element.vote_average / 2);
          element.vote_average = vote;
          if (element.original_language == "en") {
            element.original_language = "gb";
          };
          if (element.original_language == "ja") {
            element.original_language = "jp";
          };
          if (element.original_language == "zh") {
            element.original_language = "cn";
          };
          if (element.original_language == "da") {
            element.original_language = "dk";
          };
          if (element.original_language == "cs") {
            element.original_language = "cz";
          };
          if (element.original_language == "he") {
            element.original_language = "il";
          };
          if (element.original_language == "ko") {
            element.original_language = "kr";
          };
          if (element.original_language == "nn") {
            element.original_language = "nl";
          };
          if (element.original_language == "sq") {
            element.original_language = "al";
          };
          if (element.original_language == "ta") {
            element.original_language = "in";
          };
          if (element.original_language == "hu") {
            element.original_language = "ua";
          };
          if (element.original_language == "et") {
            element.original_language = "ee";
          };
        });
      });
    
    
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=f3beb21edfeef2609cba7bea4c175d1d&language=it-IT&query=" + search)
      .then(response => {
        this.catalogueSeries = response.data.results;
        console.log(this.catalogueSeries);
        this.catalogueSeries.forEach(element => {
          let vote = Math.ceil(element.vote_average / 2);
          element.vote_average = vote;
          if (element.original_language == "en") {
            element.original_language = "gb";
          };
          if (element.original_language == "ja") {
            element.original_language = "jp";
          };
          if (element.original_language == "zh") {
            element.original_language = "cn";
          };
          if (element.original_language == "da") {
            element.original_language = "dk";
          };
          if (element.original_language == "cs") {
            element.original_language = "cz";
          };
          if (element.original_language == "he") {
            element.original_language = "il";
          };
          if (element.original_language == "ko") {
            element.original_language = "kr";
          };
          if (element.original_language == "nn") {
            element.original_language = "nl";
          };
          if (element.original_language == "sq") {
            element.original_language = "al";
          };
          if (element.original_language == "ta") {
            element.original_language = "in";
          };
          if (element.original_language == "hu") {
            element.original_language = "ua";
          };
          if (element.original_language == "et") {
            element.original_language = "ee";
          };
        });
      });
    },
  },
  
});
