interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}
interface Details {
    author: string;
    year: number;
}


const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'ed sheeran',
        year: 2015
    }
}
const{song , songDuration: duration} = audioPlayer ;
const {author : author_det}= audioPlayer.details ;
console.log('Song : ', song);
console.log('Duration : ', duration);
console.log('Author : ', author_det);




export { };