import { schedules } from "../data/functionHours"
export const prices = {

    padel: {
        hash: "general.activities",
        title: "products.padel.title",
        hero: "https://res.cloudinary.com/oporto-/image/upload/v1630319426/campus/padel_p8iine.jpg",
        subtitle: "products.padel.subtitle",
        hours: schedules.default,
        prices: {
            classes: [
                {
                    name: "general.soloSession",
                    price: {
                        member: 50,
                        nonMember: 60
                    }
                },
                {
                    name: "general.paxSession2",
                    price: {
                        member: 30,
                        nonMember: 40
                    }
                },
                {
                    name: "general.paxSession3",
                    price: {
                        member: 25,
                        nonMember: 35
                    }
                },
                {
                    name: "general.paxSession4",
                    price: {
                        member: 20,
                        nonMember: 30
                    }
                },
            ],
            rent: [
                {
                    name: "general.court60min",
                    price: {
                        member: 15,
                        nonMember: 25
                    }
                },
                {
                    name: "general.court90min",
                    price: {
                        member: 25,
                        nonMember: 35
                    }
                },
                {
                    name: "general.courtHalfDay",
                    price: {
                        member: 60,
                        nonMember: 75
                    }
                },
                {
                    name: "general.courtFullDay",
                    price: {
                        member: 110,
                        nonMember: 130
                    }
                },

                {
                    name: "general.racketAndBalls",
                    price: {
                        member: "Free",
                        nonMember: 7.5
                    }
                },
                {
                    name: "general.lightAditional",
                    price: {
                        member: `+€5`,
                        nonMember: `+€5`
                    }
                },
            ]
        }
    },

    pilates: {
        hash: "general.activities",
        title: "products.pilates.title",
        subtitle: "products.pilates.subtitle",
        hero: "https://res.cloudinary.com/oporto-/image/upload/v1630319426/campus/pilates_mafpjs.jpg",
        hours: schedules.default,
        prices: {
            classes: [
                {
                    name: "general.singleSession",
                    solo: true,
                    price: {
                        member: 55,
                        nonMember: 65
                    }
                },

                {
                    name: "general.sessionCourse4",
                    solo: true,
                    price: {
                        member: 200,
                        nonMember: 240
                    }
                },

                {
                    name: "general.sessionCourse8",
                    solo: true,
                    price: {
                        member: 360,
                        nonMember: 420
                    }
                },
            ],
        }
    },
    fitness: {
        hash: "general.activities",
        title: "products.fitness.title",
        subtitle: "products.fitness.subtitle",
        hero: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        hours: schedules.default,
        prices: {
            classes: [
                {
                    name: "general.singleSession",
                    solo: true,
                    price: {
                        member: 55,
                        nonMember: 65
                    }
                },

                {
                    name: "general.sessionCourse4",
                    solo: true,
                    price: {
                        member: 200,
                        nonMember: 240
                    }
                },

                {
                    name: "general.sessionCourse8",
                    solo: true,
                    price: {
                        member: 360,
                        nonMember: 420
                    }
                },
                {
                    name: "general.physicalAssessment",
                    solo: true,
                    price: {
                        member: 20,
                        nonMember: 40
                    }
                },
            ],
        }
    },

    yoga: {
        hash: "general.activities",
        title: "products.yoga.title",
        subtitle: "products.yoga.subtitle",
        hero: "https://images.unsplash.com/photo-1611094601537-cdbb75b979cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
        hours: schedules.default,
        prices: {
            groupClasses: [
                {
                    name: "general.singleSession",
                    solo: false,
                    price: {
                        member: 20,
                        nonMember: 30
                    }
                },
                {
                    name: "general.sessionCourse4",
                    solo: false,
                    price: {
                        member: 70,
                        nonMember: 90
                    }
                },

                {
                    name: "general.sessionCourse8",
                    solo: false,
                    price: {
                        member: 120,
                        nonMember: 160
                    }
                },


            ],
            soloClasses: [
                {
                    name: "general.singleSession",
                    solo: true,
                    price: {
                        member: 50,
                        nonMember: 65
                    }
                },
                {
                    name: "general.sessionCourse4",
                    solo: true,
                    price: {
                        member: 180,
                        nonMember: 220
                    }
                },
                {
                    name: "general.sessionCourse8",
                    solo: true,
                    price: {
                        member: 320,
                        nonMember: 380
                    }
                },

            ]
        }
    },

    massage: {
        hash: "general.wellness",
        title: "products.massage.title",
        subtitle: "products.massage.subtitle",
        hero: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        hours: schedules.default,
        prices: {
            treatments: [
                {
                    name: 'massages.relaxing.title',
                    duration: 50,
                    description: "massages.relaxing.description",
                    price: {
                        member: 45,
                        nonMember: 55,
                    }
                },
                {
                    name: 'massages.tissue.title',
                    duration: 50,
                    description: "massages.tissue.description",
                    price: {
                        member: 60,
                        nonMember: 70,
                    }
                },
                {
                    name: 'massages.retreat.title',
                    duration: 50,
                    description: "massages.retreat.description",
                    price: {
                        member: 80,
                        nonMember: 90,
                    }
                },
                {
                    name: 'massages.lymph.title',
                    duration: 50,
                    description: "massages.lymph.description",
                    price: {
                        member: 45,
                        nonMember: 55,
                    }
                },
                {
                    name: 'massages.neck.title',
                    duration: 50,
                    description: "massages.neck.description",
                    price: {
                        member: 35,
                        nonMember: 45,
                    }
                },
                {
                    name: 'massages.legs.title',
                    duration: 50,
                    description: "massages.legs.description",
                    price: {
                        member: 35,
                        nonMember: 45,
                    }
                },
                {
                    name: 'massages.foot.title',
                    duration: 50,
                    description: "massages.foot.description",
                    price: {
                        member: 35,
                        nonMember: 45,
                    }
                },
                {
                    name: 'massages.head.title',
                    duration: 50,
                    description: "massages.head.description",
                    price: {
                        member: 20,
                        nonMember: 30,
                    }
                },
                {
                    name: 'massages.chinese1.title',
                    duration: 50,
                    description: "massages.chinese1.description",
                    price: {
                        member: 40,
                        nonMember: 50,
                    }
                },
                {
                    name: 'massages.chinese2.title',
                    duration: 50,
                    description: "massages.chinese2.description",
                    price: {
                        member: 30,
                        nonMember: 40,
                    }
                },
            ]
        }
    },

}