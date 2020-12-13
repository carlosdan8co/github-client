class Github{

    constructor(clientid, clientS){
        this.clientid=clientid;
        this.clientS=clientS;
        this.repost_count=7;
        this.sort="created: asc";
    }

    async fetchUser(user){
        const userDataRequest= await fetch(`http://api.github.com/users/${user}?client_id=${this.clientid}&client_secret=${this.clientS}`);
        const repositoriesRequest= await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.clientid}&client_secret=${this.clientS}&per_page=${this.repost_count}&sort=${this.sort}`);
        const repositories = await repositoriesRequest.json();
        console.log(repositories)
        const userData = await userDataRequest.json()
        return {
            userData,
            repositories
        };
    }
}

module.exports=Github;