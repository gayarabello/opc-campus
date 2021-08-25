export const prices = {

    padel: {
        hash: "general.activities",
        title: "products.padel.title",
        hero: "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        subtitle: "products.padel.subtitle",
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
                        member: 20,
                        nonMember: 30
                    }
                },
                {
                    name: "general.paxSession3",
                    price: {
                        member: 15,
                        nonMember: 25
                    }
                },
                {
                    name: "general.paxSession4",
                    price: {
                        member: 10,
                        nonMember: 20
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
                        nonMember: 40
                    }
                },
                {
                    name: "general.courtHalfDay",
                    price: {
                        member: 55,
                        nonMember: 170
                    }
                },
                {
                    name: "general.courtFullDay",
                    price: {
                        member: 100,
                        nonMember: 120
                    }
                },

                {
                    name: "general.racketAndBalls",
                    price: {
                        member: "Free",
                        nonMember: 7.5
                    }
                },
            ]
        }
    },

    pilates: {
        hash: "general.activities",
        title: "products.pilates.title",
        subtitle: "products.pilates.subtitle",
        hero: "https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
        prices: {
            classes: [
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
                        member: 45,
                        nonMember: 60
                    }
                },

                {
                    name: "general.sessionCourse8",
                    solo: true,
                    price: {
                        member: 40,
                        nonMember: 55
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
                        nonMember: 440
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
        prices: {
            'group classes': [
                {
                    name: "general.singleSession",
                    solo: false,
                    price: {
                        member: 20,
                        nonMember: 25
                    }
                },
                {
                    name: "general.sessionCourse4",
                    solo: false,
                    price: {
                        member: 60,
                        nonMember: 80
                    }
                },

                {
                    name: "general.sessionCourse8",
                    solo: false,
                    price: {
                        member: 100,
                        nonMember: 130
                    }
                },


            ],
            'solo classes': [
                {
                    name: "general.singleSession",
                    solo: true,
                    price: {
                        member: 30,
                        nonMember: 45
                    }
                },
                {
                    name: "general.sessionCourse4",
                    solo: true,
                    price: {
                        member: 100,
                        nonMember: 140
                    }
                },
                {
                    name: "general.sessionCourse8",
                    solo: true,
                    price: {
                        member: 180,
                        nonMember: 230
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
        prices: {
            treatments: [
                {
                    name: 'general.relaxing',
                    duration: 60,
                    description: "massages.relaxing",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
                {
                    name: 'general.aromatic',
                    duration: 60,
                    description: "massages.aromatic",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
                {
                    name: 'general.modeling',
                    duration: 60,
                    description: "massages.modeling",
                    price: {
                        member: 60,
                        nonMember: 75,
                    }
                },
                {
                    name: 'general.sports',
                    duration: 60,
                    description: "massages.sports",
                    price: {
                        member: 60,
                        nonMember: 75,
                    }
                },
            ]
        }
    },

}