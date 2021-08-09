export const prices = {
    massage: {
        hash: "Wellness",
        title: "Massage",
        subtitle: "Your wellbeing in good hands",
        hero: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        prices: {
            treatments: [
                {
                    name: 'relaxing',
                    duration: 60,
                    descriptionPT: "A deep massage with techniques that improve blood circulation, remove toxic substances, relieve stress and restore your psycho-emotional and energetic area.",
                    descriptionEN: "Uma massagem profunda com várias técnicas que promove a melhoria da circulação sanguínea, remove substâncias tóxicas, alivia o stress e restabelece a sua área psico-emocional e energética.",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
                {
                    name: 'aromatic',
                    duration: 60,
                    descriptionPT: "The perfect combination of the therapist’s touch and the holistic effect of the aromatherapy oils helps to relax, relieve stress, detoxify or recover energies.",
                    descriptionEN: "A combinação entre o toque da terapeuta e o efeito holístico dos óleos de aromaterapia ajudam a relaxar, aliviar o stress, desintoxicar ou recuperar energias.",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
                {
                    name: 'modeling',
                    duration: 60,
                    descriptionPT: "The modeling massage is indicated for those who want to reduce their measurements and also improve the appearance of cellulite.The technique uses firm movements with greater pressure in the movements.",
                    descriptionEN: "Indicada para quem pretende reduzir as medidas e, também, melhorar o aspeto da celulite.A técnica utiliza movimentos firmes, rápidos e com maior pressão nas manobras.",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
                {
                    name: 'sports',
                    duration: 60,
                    descriptionPT: "Suitable for those suffering from muscle tension and pain.Sports massage helps you regain your muscles after training, as it relieves pain by removing lactic acid from the muscles.",
                    descriptionEN: "Indicado para aqueles que sofrem de tensão muscular e dor. A massagem desportiva ajuda a recuperar os músculos após o treino, já que alivia a dor ao retirar o ácido láctico dos músculos.",
                    price: {
                        member: 50,
                        nonMember: 65,
                    }
                },
            ]
        }
    },
    padel: {
        hash: "Activities",
        title: "Padel",
        hero: "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        subtitle: "Get your game on!",
        prices: {
            classes: [
                {
                    name: "Individual session",
                    price: {
                        member: 55,
                        nonMember: 60
                    }
                },
                {
                    name: "2 pax session",
                    price: {
                        member: 25,
                        nonMember: 30
                    }
                },
                {
                    name: "3 pax Session",
                    price: {
                        member: 20,
                        nonMember: 25
                    }
                },
                {
                    name: "4 pax session",
                    price: {
                        member: 15,
                        nonMember: 20
                    }
                },
            ],
            rent: [
                {
                    name: "Court 60 min",
                    price: {
                        member: 30,
                        nonMember: 25
                    }
                },
                {
                    name: "Court 90 min",
                    price: {
                        member: 45,
                        nonMember: 40
                    }
                },
                {
                    name: "Court Half Day 6h",
                    price: {
                        member: 130,
                        nonMember: 130
                    }
                },
                {
                    name: "Court Full Day 12h",
                    price: {
                        member: 250,
                        nonMember: 250
                    }
                },

                {
                    name: "Racket Low End",
                    price: {
                        member: 5,
                        nonMember: 5
                    }
                },
                {
                    name: "Racket High End",
                    price: {
                        member: 7.5,
                        nonMember: 7.5
                    }
                }
            ]
        }
    },
    ioga: {
        hash: "Activities",
        title: "Ioga",
        hero: "https://images.unsplash.com/photo-1588783344727-f67e17b45dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        subtitle: "Train your soul",
        prices: {
            'group classes': [
                {
                    name: "Single session",
                    solo: false,
                    price: {
                        member: 15,
                        nonMember: 20
                    }
                },
                {
                    name: "4 session course",
                    solo: false,
                    price: {
                        member: 50,
                        nonMember: 60
                    }
                },

                {
                    name: "8 session course",
                    solo: false,
                    price: {
                        member: 90,
                        nonMember: 100
                    }
                },


            ],
            'solo classes': [
                {
                    name: "Single session",
                    solo: true,
                    price: {
                        member: 30,
                        nonMember: 45
                    }
                },
                {
                    name: "4 session course",
                    solo: true,
                    price: {
                        member: 100,
                        nonMember: 115
                    }
                },
                {
                    name: "8 session course",
                    solo: true,
                    price: {
                        member: 180,
                        nonMember: 195
                    }
                },

            ]
        }
    },
    pilates: {
        hash: "Activities",
        title: "Pilates",
        hero: "https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
        subtitle: "1:1 specialized classes",
        prices: {
            classes: [
                {
                    name: "Single session",
                    solo: true,
                    price: {
                        member: 55,
                        nonMember: 65
                    }
                },

                {
                    name: "4 session course",
                    solo: true,
                    price: {
                        member: 50,
                        nonMember: 60
                    }
                },

                {
                    name: "8 session course",
                    solo: true,
                    price: {
                        member: 45,
                        nonMember: 55
                    }
                },
            ],
        }
    },
    fitness: {
        hash: "Activities",
        title: "Fitness",
        hero: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        subtitle: "Become the best version of yourself",
        prices: {
            classes: [
                {
                    name: "Single session",
                    solo: true,
                    price: {
                        member: 55,
                        nonMember: 65
                    }
                },

                {
                    name: "4 session course",
                    solo: true,
                    price: {
                        member: 200,
                        nonMember: 240
                    }
                },

                {
                    name: "8 session course",
                    solo: true,
                    price: {
                        member: 360,
                        nonMember: 440
                    }
                },
                {
                    name: "Physical Assessment",
                    solo: true,
                    price: {
                        member: 30,
                        nonMember: 30
                    }
                },
            ],
        }
    },

}