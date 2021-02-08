class Contestant
{
    constructor()
    {
        this.name = "";
        this.distance = 0;
        this.index = null;

    }

    
    getCount()
        { 
            var contestantRef = database.ref("contestantCount");
            contestantRef.on("value",function(data)
            {
                contestantCount = data.val();
            })
        }

        updateCount(count)
        {
            database.ref("/").update({contestantCount : count})
        }

        update()
        {
            var contestantIndex  = "Contestants/contestant" + this.index;
            database.ref(contestantIndex).set({name : this.name, distance : this.distance})
        }

        static getContestantInfo()
        {
            var referenceNode = database.ref("Contestants");
            referenceNode.on("value",(data)=>{
                allContestants = data.val();
            });

}

    
}