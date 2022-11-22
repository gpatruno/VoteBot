import Timer from './Timer';
const VoteBotError = require('./error/VoteBotError');

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export default class Singleton {
    private static instance: Singleton;
    private static currentVote: String;         // Type de vote en cours
    private static currentUser: String;         // Utilisateur visé par le vote
    private static mVote: Map<String, boolean>; // Map d'utilisateur qui ont voté avec la valeur du vote
    private static timer: number;               // Temps en milliseconde avant la fin du votre

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        Singleton.mVote = new Map<String, boolean>();
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
        console.log(`Le vote est terminé. Résultat ${this.getCurrentVote()}`);
        Singleton.currentUser = "";
        Singleton.currentVote = "";
        Singleton.mVote = new Map<String, boolean>();
    }

    /**
     * createVote 
     * @param pUser String Utilisateur visé par le vote
     * @param pVote String Type de vote
     */
    public createVote(pUser: String, pVote: String) {
        Singleton.currentUser = pUser;
        Singleton.currentVote = pVote;
        Singleton.mVote = new Map<String, boolean>();
        Singleton.timer = 90;
        new Timer(Singleton.timer);
    }

    public getCurrentVote(): String {
        const result = `Vote de ${Singleton.currentVote} pour ${Singleton.currentUser}.
        Nombre de vote : ${Singleton.mVote.size}
        Nombre de vote Pour : ${this.getVotePour()}
        Nombre de vote Contre : ${this.getVoteContre()}`;
        return result;
    }

    private getVoteContre(): number {
        let nbNo: number = 0;
        Singleton.mVote.forEach((value: boolean, key: String) => {
            nbNo = (value) ? nbNo : nbNo + 1;
        });
        return nbNo;
    }

    private getVotePour(): number {
        let nbYes: number = 0;
        Singleton.mVote.forEach((value: boolean, key: String) => {
            nbYes = (value) ? nbYes + 1 : nbYes ;
        });        
        return nbYes;
    }

    public setVote(pUser: string, pVote: boolean): String {
        if (Singleton.mVote.get(pUser) !== undefined) {
            return `L'utilisateur ${pUser} a déjà voté.`;
        } else {
            Singleton.mVote.set(pUser, pVote);
            return `${pUser} - Ton vote a bien été pris en compte`;
        }
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    s1.createVote("StakeGolder", "BAN");
    console.log(s1.setVote("Kevin", true));
    console.log(s1.setVote("marc", false));
    const s2 = Singleton.getInstance();
    console.log(s2.setVote("robin", false));
    console.log(s2.setVote("marc", true));
    console.log(s2.getCurrentVote());

    
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
        throw new VoteBotError('FileNotFound', 'testFile.txt');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();