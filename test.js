const accessToken =  async () =>{ let test = await this.appPreferences.fetch("accessToken");
console.log('111', test);
// if(accessToken != null) {
//   if(this.tokenExpired(accessToken)){
//     console.log('222')
//     browser.executeScript({ code: "document.cookie = 'lpr5' + '=' + 'accessToken' + '; expires=' + 3 + '; domain=.laprovence.com; samesite=lax; secure; path=/ '" }).then()
//   }}
}
