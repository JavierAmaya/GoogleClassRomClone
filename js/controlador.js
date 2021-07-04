console.log('DOM cargado');

const returnIndex = () => {
    location.href = "/TareaExtra_I/";
}


const setDataClassRoom = () => {

    var data = [{
        instructor : {
            nombre: "goku",
            correo: "goku@gmail.com",
            imagen: "goku.jpg"
        },
        clases : [
            {
                nombreClase: "Programacion II",
                codigo: "CASDASD",
                seccion : "1200",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    {
                        nombre: "Victor",
                        correo: "photojavhn@gmail.com",
                        imagen: "Krillin.jpg"
                    },
                    {
                        nombre: "Javier",
                        correo: "javier@gmail.com",
                        imagen: "gohan.jpg"
                    }
                ],
                anuncios : [
                    {
                        mensaje: "Ojala me de 100",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "Que me salga buena esta tarea",
                        fecha : "12/12/12"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 1",
                        descripcion: "Entregar la tarea",
                        fecha : "12/12/12"
                    },
                    {
                        titulo: "Tarea 2",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/13"
                    },
                    {
                        titulo: "Tarea 3",
                        descripcion: "Entregar la tarea",
                        fecha : "14/14/14"
                    }
                ]
            },
            {
                nombreClase: "Algoritmos",
                codigo: "HDFFDd",
                seccion : "1500",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    {
                        nombre: "Victor",
                        correo: "photojavhn@gmail.com",
                        imagen: "Krillin.jpg"
                    },
                    {
                        nombre: "Javier",
                        correo: "javier@gmail.com",
                        imagen: "gohan.jpg"
                    }
                ],
                anuncios : [
                    {
                        mensaje: "Simon me va dar 100",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "Clase pasada con 100",
                        fecha : "12/12/12"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 4",
                        descripcion: "Entregar la tarea",
                        fecha : "12/12/21"
                    },
                    {
                        titulo: "Tarea 5",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/22"
                    },
                    {
                        titulo: "Tarea 6",
                        descripcion: "Entregar la tarea",
                        fecha : "14/14/20"
                    }
                ]
            },
            {
                nombreClase: "Inteligencia Artificial",
                codigo: "IS-911",
                seccion : "0800",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    
                ],
                anuncios : [
                    {
                        mensaje: "Sin miedo al exito",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "con todo",
                        fecha : "12/12/21"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 7",
                        descripcion: "Entregar la tarea",
                        fecha : "12/2/12"
                    },
                    {
                        titulo: "Tarea 8",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/13"
                    },
                    {
                        titulo: "Tarea 9",
                        descripcion: "Entregar la tarea",
                        fecha : "14/02/21"
                    }
                ]
            }
        ]
        
    },
    {
        instructor : {
            nombre: "chaozu",
            correo: "chaozu@gmail.com",
            imagen: "chaozu.jpg"
        },
        clases : [
            {
                nombreClase: "Seguridad",
                codigo: "IS-912",
                seccion : "1200",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    {
                        nombre: "Victor",
                        correo: "photojavhn@gmail.com",
                        imagen: "Krillin.jpg"
                    },
                    {
                        nombre: "Javier",
                        correo: "javier@gmail.com",
                        imagen: "gohan.jpg"
                    }
                ],
                anuncios : [
                    {
                        mensaje: "Ojala me de 100",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "Que me salga buena esta tarea",
                        fecha : "12/12/12"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 1",
                        descripcion: "Entregar la tarea",
                        fecha : "12/12/12"
                    },
                    {
                        titulo: "Tarea 2",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/13"
                    },
                    {
                        titulo: "Tarea 3",
                        descripcion: "Entregar la tarea",
                        fecha : "14/14/14"
                    }
                ]
            },
            {
                nombreClase: "Liderazgo",
                codigo: "FFFFF",
                seccion : "1500",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    {
                        nombre: "Victor",
                        correo: "photojavhn@gmail.com",
                        imagen: "Krillin.jpg"
                    },
                    {
                        nombre: "Javier",
                        correo: "javier@gmail.com",
                        imagen: "gohan.jpg"
                    }
                ],
                anuncios : [
                    {
                        mensaje: "Simon me va dar 100",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "Clase pasada con 100",
                        fecha : "12/12/12"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 4",
                        descripcion: "Entregar la tarea",
                        fecha : "12/12/21"
                    },
                    {
                        titulo: "Tarea 5",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/22"
                    },
                    {
                        titulo: "Tarea 6",
                        descripcion: "Entregar la tarea",
                        fecha : "14/14/20"
                    }
                ]
            },
            {
                nombreClase: "Analisis",
                codigo: "IS-921",
                seccion : "0800",
                aula : "401",
                descripcion : "clase tururu",
                participantes: [
                    
                ],
                anuncios : [
                    {
                        mensaje: "Sin miedo al exito",
                        fecha : "12/12/12"
                    },
                    {
                        mensaje: "con todo",
                        fecha : "12/12/21"
                    }
                ],
                asignaciones : [
                    {
                        titulo: "Tarea 7",
                        descripcion: "Entregar la tarea",
                        fecha : "12/2/12"
                    },
                    {
                        titulo: "Tarea 8",
                        descripcion: "Entregar la tarea",
                        fecha : "13/13/13"
                    },
                    {
                        titulo: "Tarea 9",
                        descripcion: "Entregar la tarea",
                        fecha : "14/02/21"
                    }
                ]
            }
        ]
        
    }];

    var localStorage = window.localStorage;

    if (localStorage.getItem('classRoom') == null) {
        localStorage.setItem('classRoom',JSON.stringify(data));
    } else {
        console.log("LocalStorage Full");
    }

};

setDataClassRoom();



/// funcion para generar la lista de instructores
const setListInstructores = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));

    document.getElementById('list-instruc').innerHTML = `
        <li class="nav-item ta-r">
            <div><button class="btn my-2 my-sm-0 ml-auto" type="button" data-toggle="collapse" data-target="#list-instructores" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-times btns-nav fa-lg ml-auto"></i></button><a class="a-nav-vertical"></a></div>
        </li>
    `;
    dataLocalStorage.forEach(e => {
        console.log(e.instructor.nombre);
        document.getElementById('list-instruc').innerHTML +=`
            <li class="nav-item mb-3" onclick="setInstructor('${e.instructor.nombre}')">
                <div class="row">
                    <div class="col-3 pb-0">
                        <img class="img-profile mt-2" src="./src/profile-pics/${e.instructor.imagen}" alt="">
                    </div>
                    <div class="col-9">
                        <div class="row" id="descrip-clase">
                            <div class="col-12"><a class="navbar-brand title-classRoom mt-0 pt-0 pb-0"><small><strong>${e.instructor.nombre}</strong></small></a></div>
                            <div class="col-12"><p class="mb-0"><small>${e.instructor.correo}</small></p></div>
                        </div>
                    </div>
                </div>
            </li>
        `;
        
    });
};

setListInstructores();

/// funcion para cambiar de ruta (URL)
const viewClase = (codClase) => {
    console.log('clase seleccionada',codClase);
    location.href = "/TareaExtra_I/views/clase.html";
    
    localStorage.setItem('claseSeleccionada',JSON.stringify(codClase));
    
}

/// funcion para llenar las clases en la navbar
const setClasesInstructor = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));
    let instructor = localStorage.getItem('instructor');

    document.getElementById('clases-instructor').innerHTML = '';

    dataLocalStorage.forEach(element => {
        
        if (element.instructor.nombre == instructor) {
            element.clases.forEach((e,indice) => {
                document.getElementById('clases-instructor').innerHTML += `
                    <li class="nav-item mb-3" onclick="viewClase('${e.codigo}')">
                        <div class="row">
                            <div class="col-3 pb-0">
                                <img class="img-profile mt-2" src="./src/profile-pics/${element.instructor.imagen}" alt="">
                            </div>
                            <div class="col-9">
                                <div class="row" id="descrip-clase-${indice}">
                                <div class="col-12"><a class="navbar-brand title-classRoom mt-0 pt-0 pb-0"><small><strong>${e.nombreClase}</strong></small></a></div>
                                <div class="col-12"><p class="mb-0"><small>${e.seccion}</small></p></div>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
            });
        }
    });
};


//funcion para mostrar las clases segun el instructor seleccionado
const setClases = () => {

    let nameInstructor = localStorage.getItem('instructor');

    let dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));

    document.getElementById('section-clases').innerHTML = '';
    
    dataLocalStorage.forEach(element => {
        if (element.instructor.nombre == nameInstructor) {
            element.clases.forEach((clase,index) => {  
                document.getElementById('section-clases').innerHTML += `
                    <div class="col-xl-3 col-md-3 col-sm-3">
                        <div class="card text-white" onclick="viewClase('${clase.codigo}')">
                            <img src="./src/img/img_reachout.jpg" class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title mb-0">${clase.nombreClase}</h5>
                                <p class="card-text">${clase.seccion}</p>
                            </div>
                            <div class="card-body txt-card" id="div-asignaciones-${index}">
                                
                            </div>
                            <div class="card-footer text-muted footer-card">
                                <button class="btn my-2 my-sm-0" type="submit"><i class="fas fa-chart-line"></i></button>
                                <button class="btn my-2 my-sm-0" type="submit"><i class="far fa-folder"></i></button>
                            </div>
                        </div>
                    </div>
                `;
        
                let div = "div-asignaciones-"+index; 
                clase.asignaciones.forEach(asignacion => {
                    document.getElementById(div).innerHTML += `
                        <div>
                            <a>${asignacion.fecha}</a>
                            <p>${asignacion.titulo}</p>
                        </div>
                    `;
                });
            });
        }
    });

    setClasesInstructor();

};

const setInstructor = (nameInstructor) => {
    // set instructor por default por mientras
   //localStorage.setItem('instructor',"goku");
    //location.reload();
    //document.getElementById('profile-instructor').setAttribute("aria-expanded", false);
    //document.getElementById('profile-instructor').classList.add('collapsed');
    document.getElementById('profile-instructor').click();

    if (localStorage.getItem('instructor') == null ) {
        localStorage.setItem('instructor',nameInstructor)
    } else {
        localStorage.setItem('instructor',nameInstructor);
    }
    
    dataClassRoom = JSON.parse(localStorage.getItem('classRoom'));

    dataClassRoom.forEach(element => {
        if (nameInstructor == element.instructor.nombre) {
            document.getElementById('profile-instructor').innerHTML = `
                <img class="img-profile" src="./src/profile-pics/${element.instructor.imagen}" alt="">
            `;
            
        }
    });
    setClases();
    
};

///if por si se selecciono otro instructor desde la view clase
// si se seteo algun instructor poes hay que cargar lo del instructor seleccionado
if (localStorage.getItem('instructor') != null) {
    setInstructor(localStorage.getItem('instructor'));
}