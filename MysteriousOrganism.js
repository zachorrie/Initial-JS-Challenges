// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAF = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      mutate() {
        const randomNumber = Math.floor(Math.random() * 15);
  
        const dnaBaseList = ['A', 'T', 'C', 'G'];
        const index = dnaBaseList.indexOf(this.dna[randomNumber]);
        dnaBaseList.splice(index, 1);
  
        const mutatedBase = dnaBaseList[Math.floor(Math.random() * 3)]
        this.dna.splice(randomNumber, 1, mutatedBase);
  
        return this.dna;
      }, 
  
      compareDNA(otherPA) {
        let i = 0;
        let identBaseCount = 0;
  
        for (base of this.dna) {;
          if (base === otherPA.dna[i]) {
            identBaseCount += 1;
          }
          i += 1;
        }
  
        //console.log(this.dna);
        //console.log(otherPA.dna)
        const sharedPerc = ((identBaseCount/15) * 100).toFixed(2);
        console.log(`Specimen #${this.specimenNum} and Specimen #${otherPA.specimenNum} have ${sharedPerc}% DNA in common.`);
         
      },
  
      willLikelySurvive() {
        let cgCount = 0;
        for (base of this.dna) {
          if (base === 'C' || base === 'G') {
            cgCount += 1;
          }
        }
  
        const percCG = (cgCount/15) * 100;
        if (percCG >= 60) {
          return true;
        } else return false;
      },
  
      complementStrand() {
        const complementStrand = []
        for (base of this.dna) {
          if (base === 'A') {
            complementStrand.push('T');
          } else if (base === 'T') {
            complementStrand.push('A')
          } else if (base === 'G') {
            complementStrand.push('C')
          } else complementStrand.push('G')
        }
        return complementStrand;
      }    
    }
  }
  
  
  // Generates an Array of 30 pAequor instances which are likely to survive their environment
  const generateStudyPool = () => {
    const arrayToStudy = [];
    for (let i = 1; arrayToStudy.length < 30; i+=1 ) {
      let tempPA = pAF(i, mockUpStrand());
      if (tempPA.willLikelySurvive() === true) {
        arrayToStudy.push(tempPA);
      }
    }
    return arrayToStudy; 
  }
  
  
  // Log a neatened copy of the Study Array
  const studyPoolLog = () => {
    const studyPool = generateStudyPool();
    console.log('THIRTY PAEQUOR INSTANCES LIKELY TO SURVIVE THEIR ENVIRONMENT')
    console.log('')
    console.log('')
    studyPool.forEach(specimen => console.log(`Specimen: ${specimen.specimenNum} | 
  Strand Composition: ${specimen.dna.join(', ')}
  Strand Complement: ${specimen.complementStrand().join(', ')}
  `))
  }
  
  console.log(studyPoolLog());
  
  /*
  let ex1 = pAF(1, mockUpStrand());
  let ex2 = pAF(2, mockUpStrand());
  let ex3 = pAF(3, ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'G', 'G', 'G', 'G', 'G', 'G','G', 'G'])
  
  
  console.log(ex1.compareDNA(ex2))
  console.log(ex3.willLikelySurvive())
  */
  
  
  
  
  
  