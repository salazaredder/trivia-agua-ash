const RootComponent = {
    data() {
        return {
            trivia: {
                questions: [
                    {
                        id: 1,
                        title: "¿Desde qué año se celebra el día internacional del agua los 22 de marzo?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "1992", valid: false},
                            {value: 2, text: "1993", valid: true},
                            {value: 3, text: "1940", valid: false},
                            {value: 4, text: "1952", valid: false},
                        ],
                        info: `La idea de celebrar este día internacional se remonta a 1992, año en el que tuvo lugar la Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo de Río de Janeiro y en la que emanó la propuesta. Ese mismo año, la Asamblea General adoptó la resolución por la que el 22 de marzo de cada año fue declarado Día Mundial del Agua, siendo 1993 el primer año de celebración.`
                    },
                    {
                        id: 2,
                        title: "Cada año el Día Mundial del Agua gira en torno a un lema específico, ¿sabes cuál es el de este año?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "Agua y cambio climático", valid: false},
                            {value: 2, text: "No dejar a nadie atras", valid: false},
                            {value: 3, text: "Valoremos el agua", valid: true},
                            {value: 4, text: "Agua para todos", valid: false},
                        ],
                        info: `A raíz del desarrollo económico y del incremento de la población mundial, la agricultura y la industria necesitan cada vez más agua, y para satisfacer la demanda de electricidad, aumenta la utilización de fuentes de 3 energía que hacen uso de grandes volúmenes de agua. El cambio climático, por su parte, hace que los patrones de disponibilidad de agua sean más irregulares y agudiza la contaminación.`
                    },
                    {
                        id: 3, title: "¿Cuál es el rio más grande de Venezuela?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "Orinoco", valid: true},
                            {value: 2, text: "Caroní", valid: false},
                            {value: 3, text: "Guaire", valid: false},
                            {value: 4, text: "Apure", valid: false},
                        ],
                        info: `El río Orinoco es uno de los ríos más importantes de América del Sur que nace y discurre mayormente por Venezuela y una parte por Colombia. Es el cuarto río sudamericano más largo con 2140 Km de largo.`
                    },
                    {
                        id: 4,
                        title: "Sabemos que la tierra está cubierta por 70% de agua pero… ¿Cuánto de este porcentaje es agua dulce apta para el consumo humano?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "3%", valid: false},
                            {value: 2, text: "2,5%", valid: true},
                            {value: 3, text: "1%", valid: false},
                            {value: 4, text: "4,5%", valid: false},
                        ],
                        info: `El 97,5% de agua en la tierra es agua salada, es decir, solo 2,5% es agua dulce. De esa cantidad, solo el 0,007% del total está disponible para consumo humano, debido a que el 69,7% del agua dulce está congelada en los polos o en los glaciares, el 30% está enterrada bajo la superficie en acuíferos y el 0,3% en los ríos y los lagos.`
                    },
                    {
                        id: 5, title: "¿Cuántos litros de agua se gastan en una ducha promedio de 10 minutos?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "200 litros", valid: true},
                            {value: 2, text: "20 litros", valid: false},
                            {value: 3, text: "50 litros", valid: false},
                            {value: 4, text: "100 litros", valid: false},
                        ],
                        info: `cada minuto que pasa nuestro grifo abierto, gastamos unos 20 litros. Si haces unos sencillos cálculos, verás que son 1400 litros de agua a la semana y 5600 litros al mes por persona, lo cual resulta un dato realmente llamativo. Si reducimos este tiempo de ducha a la mitad, ahorraríamos 100 litros de agua.`
                    },
                    {
                        id: 6, title: "¿Cuántos días puede una persona sobrevivir sin beber agua?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "Entre 2 y 3 días", valid: false},
                            {value: 2, text: "20 días", valid: false},
                            {value: 3, text: "Entre 5 y 7 días", valid: true},
                            {value: 4, text: "1 día", valid: false},
                        ],
                        info: `El agua es más necesaria que la comida para nuestra supervivencia. Se calcula que, en situaciones de máxima necesidad, solo puedes sobrevivir entre 5 y 7 días sin tomar agua mientras que puedes pasar sin comer hasta cerca de un mes.`
                    },
                    {
                        id: 7, title: "¿Sabes cuántas personas viven sin acceso a agua potable?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "1500 millones", valid: false},
                            {value: 2, text: "1000 millones", valid: false},
                            {value: 3, text: "800 millones", valid: false},
                            {value: 4, text: "2.200 millones", valid: true},
                        ],
                        info: `Según las Naciones Unidas, en el mundo hay 2.200 millones de personas que viven sin agua potable en sus hogares y 1 de cada 3 personas viven sin agua potable. Las cifras señalan que cuatro de cada cinco personas que no tienen acceso al agua potable viven en zonas rurales y que 159 millones de personas se ven obligadas a beber agua de superficie, obtenida de fuentes como estanques y arroyos.`
                    },
                    {
                        id: 8,
                        title: "¡Muchas personas tiran el aceite usado al fregadero! ¿Sabes cuántos litros de agua potable puede llegar a contaminar un litro de aceite usado?",
                        type: "simple",
                        answers: [
                            {value: 1, text: "20 litros", valid: false},
                            {value: 2, text: "100 litros", valid: false},
                            {value: 3, text: "Menos de 500 litros", valid: false},
                            {value: 4, text: "Mas de 1000 litros", valid: true},
                        ],
                        info: `Un litro de aceite usado contiene aproximadamente 5.000 veces más carga contaminante que el agua residual que circula por las alcantarillas y redes de saneamiento. Eso de que el agua y el aceite no se mezclan no es así, la grasa provoca atascos en las tuberías y contribuye a la reproducción de bacterias potencialmente nocivas aumentando las plagas urbanas y a la generación de malos olores.`
                    },
                    {
                        id: 9,
                        title: "¿Cuáles de estos son métodos de potabilización del agua?",
                        type: "multiple",
                        answers: [
                            {value: 1, text: "Hervir", valid: true},
                            {value: 2, text: "Cloracion", valid: true},
                            {value: 3, text: "Sodis", valid: true},
                            {value: 4, text: "Filtro", valid: true},
                            {value: 5, text: "Yodo", valid: true},
                        ],
                        info: `Las técnicas de potabilización del agua permiten eliminar los microorganismos presentes en el agua sin tratar y que pueden ser dañinos para nuestro organismo, y podemos encontrarlos en forma de pastillas, filtros o luces especiales que acaban con ellos.`
                    },
                    {
                        id: 10,
                        title: "¿Cuáles de estas enfermedades puede causar el agua contaminada?",
                        type: "multiple",
                        answers: [
                            {value: 1, text: "Diarrea", valid: true},
                            {value: 2, text: "Cáncer", valid: false},
                            {value: 3, text: "Poliomielitis", valid: true},
                            {value: 4, text: "Cólera", valid: true},
                            {value: 5, text: "Hepatitis", valid: true},
                            {value: 6, text: "Sida", valid: false},
                        ],
                        info: `La falta de agua potable y de saneamiento básico es la principal causa de enfermedades a nivel mundial, 297 000 niños menores de cinco años mueren cada año debido a enfermedades diarreicas causadas por las malas condiciones sanitarias o agua no potable.`
                    },
                ]
            },
            currentPos: 0,
            showQuestion: true,
            showLoading: true,
            points: 0,
            approved: false,
            approvedRequired: 6
        }
    },
    methods: {
        nextPos(result) {
            console.log(`result: ${result}`)
            this.points += result;
            console.log(`points: ${this.points}`)
            this.currentPos++;
            if (this.currentPos >= this.trivia.questions.length) {
                this.showQuestion = false;
                if (this.points >= this.approvedRequired) {
                    this.approved = true;
                }
                resultado = this.approved ? 'aprobado': 'no aprobado';
                window.dataLayer.push({
                    'final_trivia': 'yes',
                    'puntos': this.points,
                    'aprovado': resultado
                });
            }
        },
    },
    created() {
        setTimeout(() => {
            this.showLoading = false;
        }, 500);
    }
}
const app = Vue.createApp(RootComponent)


app.component('component-question', {
    template: `
<div class="row">
<div class="col-6 p-3">
<img src="./assets/logo_nrc.svg" alt="logo nrc">
</div>
<div class="col-6 p-3">
    <h5 class="py-3 text-end text-primary">{{pos}} / {{total}}</h5>
</div>
<div class="col-12 mt-5">
    <p class="lead">{{question.title}}</p>
</div>

<div class="col-12">
<!--
<div class="form-check py-3" v-for="(answer,index) in question.answers" @click="response = answer.value"
:class="getClassStyle(answer)">
  <input class="form-check-input" :id="index" :type="getType()" :value="answer.value" v-model="response">
  <label class="form-check-label h5">
    {{answer.text}}
  </label>
</div>
-->
<ul class="list-group">
  <li class="list-group-item py-3" v-for="(answer,index) in question.answers" @click="selectOption(answer.value)"
  :class="getClassStyle(answer)">{{answer.text}}</li>
</ul>
</div>


<div class="col-12 p-3">
    <div class="d-grid gap-2">
      <button class="btn btn btn-outline-primary btn-lg" type="button" @click="validateResponse()"
      :disabled="!response || showCorrect">Verificar</button>
    </div>
</div>
</div>
    `,
    props: {
        question: Object,
        pos: Number,
        total: Number,
    },
    emits: ['updatePos'],
    data() {
        return {
            response: null,
            responseList: [],
            showCorrect: false
        }
    },
    methods: {
        getType() {
            return this.question.type == 'multiple' ? 'checkbox' : 'radio';
        },
        selectOption(value) {
            if (this.question.type == 'simple') {
                this.response = value;
            } else {
                if (!this.responseList.includes(value)) {
                    this.responseList.push(value)
                } else {
                    toRemove = this.responseList.indexOf(value);
                    this.responseList.splice(toRemove, 1);
                }
                this.response = this.responseList.length > 0;
            }
        },
        getClassStyle(answer) {
            if (this.question.type == 'simple') {
                if (this.showCorrect) {
                    if (answer.value == this.response) {
                        return answer.valid ? 'bg-success text-white' : 'bg-danger text-white';
                    }
                    if (answer.valid && answer.value != this.response) {
                        return 'bg-success-ref text-white';
                    }
                } else {
                    if (answer.value == this.response) {
                        return 'bg-primary text-white';
                    }
                }
            } else {
                if (this.showCorrect) {
                    if (this.responseList.includes(answer.value)) {
                        return answer.valid ? 'bg-success text-white' : 'bg-danger text-white';
                    }
                    if (answer.valid && !this.responseList.includes(answer.value)) {
                        return 'bg-success-ref text-white';
                    }
                } else {
                    if (this.responseList.includes(answer.value)) {
                        return 'bg-primary text-white';
                    }
                }
            }
        },
        validateResponse() {
            validResponses = this.question.answers.filter(function (answer) {
                return answer.valid;
            })

            if (this.question.type == 'simple') {
                console.log(`Respuesta: ${this.response} == ${validResponses[0].value}`);
                resp = validResponses[0].value == this.response ? 1 : 0
            } else {
                validResponses = validResponses.map(function (item) {
                    return item.value;
                });
                this.responseList.sort();
                validResponses.sort();
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
                resp = equals(this.responseList, validResponses) ? 1 : 0;
            }
            resp_val = resp === 1 ? 'correcta' : 'incorrecta';
            resp_data = this.question.type === 'simple' ? this.response : this.responseList
            window.dataLayer.push({
                'pregunta_nro': this.question.id,
                'respuesta': resp_val,
                'seleccionado': resp_data
            });
            this.showCorrect = true;
            setTimeout(() => {
                if (resp) {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'success',
                        title: 'Correcto!',
                        text: this.question.info,
                        showConfirmButton: true,
                        confirmButtonColor: '#ff7602'
                        // timer: 1500
                    }).then((result) => {
                        this.$emit('updatePos', resp);
                    })
                } else {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'error',
                        title: 'Ups! incorrecto',
                        text: this.question.info,
                        showConfirmButton: true,
                        confirmButtonColor: '#ff7602'
                        // timer: 1500
                    }).then((result) => {
                        this.$emit('updatePos', resp);
                    })
                }
            }, 500);
        }
    },

})

const vm = app.mount('#app')