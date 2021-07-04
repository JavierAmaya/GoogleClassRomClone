//import setClasesInstructor from ..

const returnIndex = (ins) => {
    if (ins == null) {
        let instructorLogueado = localStorage.getItem('instructor');
        localStorage.setItem('instructor',instructorLogueado);
        location.href = "/TareaExtra_I/";
    }else{
        localStorage.setItem('instructor',ins);
        location.href = "/TareaExtra_I/";
    }
}

const viewClase = (codClase) => {
    console.log('clase seleccionada',codClase);
    location.href = "/TareaExtra_I/views/clase.html";
    
    localStorage.setItem('claseSeleccionada',JSON.stringify(codClase));
    
}

const getInstructor = () => {

    dataInstructor = localStorage.getItem('instructor');
    dataClassRoom = JSON.parse(localStorage.getItem('classRoom'));

    dataClassRoom.forEach(element => {

        if (dataInstructor == element.instructor.nombre) {
            document.getElementById('profile-instructor').innerHTML = `
                <img class="img-profile" src="../src/profile-pics/${element.instructor.imagen}" alt="">
            `;
            document.getElementById('anuncio-instructor').innerHTML = `
                <img class="img-profile" src="../src/profile-pics/${element.instructor.imagen}" alt="">
            `;
            document.getElementById('img-instructor-participantes').innerHTML = `
                <img class="img-profile" src="../src/profile-pics/${element.instructor.imagen}" alt="">
            `;
            document.getElementById('nombre-instructor-participantes').innerHTML = `
                ${element.instructor.nombre}
            `;
        }
    });

};

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
                                <img class="img-profile mt-2" src="../src/profile-pics/${element.instructor.imagen}" alt="">
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

const setCardAsignaciones = () => {

    dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));    
    codigoClase = JSON.parse(localStorage.getItem('claseSeleccionada'));
    dataLocalStorage.forEach(element => {
        element.clases.forEach(clase => {
            if (clase.codigo == codigoClase ) {
                clase.asignaciones.forEach(asignacion => {
                    document.getElementById('clase-asignaciones').innerHTML +=`
                        <div>
                            <a>${asignacion.fecha}</a>
                            <p>${asignacion.titulo}</p>
                        </div>
                    `;
                });
            }
        });
    });
};

const setCardAnuncios = () => {
    dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));    
    codigoClase = JSON.parse(localStorage.getItem('claseSeleccionada'));
    instructor = localStorage.getItem('instructor');

    dataLocalStorage.forEach(element => {
        element.clases.forEach(clase => {
            if (clase.codigo == codigoClase ) {
                clase.anuncios.forEach(anuncio => {
                    document.getElementById('anuncios-clase').innerHTML +=`
                        <div class="card text-white border-card mb-3">
                            <form class="form-inline form-anuncio">
                                <div class="form-group form-group-anuncio pt-1 pb-1 pl-1">
                                    <div id="anuncios-clase" class="row">
                                        <!----aqui van los anuncios-->
                                        <div class="col-1 pb-0">
                                            <img class="img-profile mt-2" src="../src/profile-pics/${instructor}.jpg" alt="">
                                        </div>
                                        <div class="col-11">
                                            <div class="row" id="descrip-clase">
                                                <div class="col-12"><a class="navbar-brand title-classRoom mt-0 pt-0 pb-0 mb-0"><small><strong>${instructor}</strong></small></a></div>
                                                <div class="col-12"><p class="mb-0"><small class="c-black">${anuncio.fecha}</small></p></div>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-1 b-b">
                                            <p class="c-black">${anuncio.mensaje}</p>
                                        </div>
                                        <div class="col-1 pb-0 mt-1">
                                            <img class="img-profile mt-2" src="../src/profile-pics/${instructor}.jpg" alt="">
                                        </div>
                                        <div class="col-10 mt-3">
                                            <input type="text" id="inputAnuncio" class="form-control w-100 input-anuncio" placeholder="agrega un comentario">
                                        </div>
                                        <div class="col-1 mt-3 pl-0">
                                            <button class="btn p-0 mr-4 mt-1" type="submit"><i class="fas fa-paper-plane btns-nav fa-lg"></i></button>
                                        </div>
                                    </div>
                                </div>  
                            </form>
                        </div>
                    `;
                });
            }
        });
    });
};

const setDivAsignaciones = () => {
    dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));    
    codigoClase = JSON.parse(localStorage.getItem('claseSeleccionada'));
    instructor = localStorage.getItem('instructor');

    dataLocalStorage.forEach(element => {
        element.clases.forEach(clase => {
            if (clase.codigo == codigoClase ) {
                clase.asignaciones.forEach(asignacion => {
                    console.log(asignacion);
                    document.getElementById('table-asignaciones').innerHTML +=`
                        <tr class="border border-table">
                            <td><button class="btn" type="submit"><img class="img-profile" src="../src/profile-pics/${instructor}.jpg" alt=""></button><strong>${asignacion.titulo}</strong></td>
                            <td class="ta-r">${asignacion.fecha}</td>
                        </tr>
                    `;
                });
            }
        });
    });
};

const setDivParticipantes = () => {
    dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));    
    codigoClase = JSON.parse(localStorage.getItem('claseSeleccionada'));
    instructor = localStorage.getItem('instructor');

    dataLocalStorage.forEach(element => {
        element.clases.forEach(clase => {
            if (clase.codigo == codigoClase ) {
                console.log(clase.participantes.length);
                if (clase.participantes.length != 0) {
                    console.log('si tiene participantes');
                    clase.participantes.forEach(participante => {
                        document.getElementById('table-participantes').innerHTML +=`
                            <tr class="border border-table">
                                <td class="ta-l"><button class="btn" type="submit"><img class="img-profile" src="../src/profile-pics/${instructor}.jpg" alt=""></button><strong>${participante.nombre}</strong></td>
                                <td class="ta-r">${participante.correo}</td>
                            </tr>
                        `;
                    });
                }else if(clase.participantes.length == 0) {
                    console.log('no tiene participantes');
                    document.getElementById('table-participantes').innerHTML =`
                        <img src="../src/img/empty_states.png" alt="">
                        <p><strong>Invita estudiantes a tu clase</strong></p>
                        <button class="btn btn-primary" type="button">Invitar</button>
                    `;
                    
                }
                
            }
        });
    });
    
};

const setListInstructoresDiv = () => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));

    document.getElementById('list-instruc').innerHTML = `
        <li class="nav-item ta-r">
            <div><button class="btn my-2 my-sm-0 ml-auto" type="button" data-toggle="collapse" data-target="#list-instructores" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-times btns-nav fa-lg ml-auto"></i></button><a class="a-nav-vertical"></a></div>
        </li>
    `;
    dataLocalStorage.forEach(e => {
        document.getElementById('list-instruc').innerHTML +=`
            <li class="nav-item mb-3" onclick="returnIndex('${e.instructor.nombre}')">
                <div class="row">
                    <div class="col-3 pb-0">
                        <img class="img-profile mt-2" src="../src/profile-pics/${e.instructor.imagen}" alt="">
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

const setCardClase = () => {
    dataLocalStorage = JSON.parse(localStorage.getItem('classRoom'));
    let seleccion = JSON.parse(localStorage.getItem('claseSeleccionada'));

    dataLocalStorage.forEach(element => {
        element.clases.forEach(e => {
                if (e.codigo == seleccion) {
                    document.getElementById('title-clase').innerHTML += `${e.nombreClase}`;
                    document.getElementById('id-clase').innerHTML += `${e.nombreClase}`;
                    document.getElementById('seccion-clase').innerHTML += `${e.seccion}`;
                    document.getElementById('id-seccion').innerHTML += `${e.seccion}`;
                    document.getElementById('codigo-clase').innerHTML += `${e.codigo}`;
                    document.getElementById('descripcion-clase').innerHTML += `${e.descripcion}`;
                    document.getElementById('aula-clase').innerHTML += `${e.aula}`;  
                }
        });
    });
    //setear las cosas del instructor
    getInstructor(); ///ok
    //setear las clases del instructor
    setClasesInstructor(); //ok
    //setear las asignaciones en la card pequena
    setCardAsignaciones();//ok
    //setear los anuncios
    setCardAnuncios();//ok
    //
    setDivAsignaciones();//ok
    //
    setDivParticipantes();//ok
    ///
    setListInstructoresDiv();//ok
};

setCardClase();

