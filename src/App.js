import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import DialogScreen from './graphicSample/SampleOfModal';
import { Line } from 'react-chartjs-2';
import Modal from 'react-bootstrap/Modal'
import MaxDialogScreen from './graphicSample/MaxSampleOFModal';


class App extends Component {
    
      constructor(props){
        super(props);

        this.state = {
            createOpen: false
        };      
        

        this.openModalCreate  = this.openModalCreate.bind(this);
        this.closeModalCreate = this.closeModalCreate.bind(this);
        
        this.state2 = {
            
            data: {
                labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
                datasets: [
                    {
                    label: "Nivel do Ph",
                    data: [2,5,10,5,10,12,11,7,12,8,12,11,5,10],
                    borderWidth: 6,
                    borderColor: 'rgba(77,166,253, 0.85)',
                    backgroundColor: 'transparent'
                },
                ]
            },

        }
        this.state3 = {
          
            data: {
                labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
                datasets: [
                    {
                    label: "Nivel do Oxigenio(O2)",
                    data: [2,5,10,5,10,12,11,7,14,8,12,11,5,10],
                    borderWidth: 6,
                    borderColor: 'rgba(27,3,3, 0.5)',
                    backgroundColor: 'transparent'
                },
              
                
                
                ]
            },
            options:{
                scales:{
                    // edita a escala A  para começar do zero!
                    yAxes: [
                        {
                          ticks:{
                              beginAtZero: true,
                          },
                          scaleLabel:{
                              display: true,
                              labelString: 'Nivel do O2 por mg/L',
                              label: "bold",
                          }
                          
                        }

                    ],
                    xAxes:[{
                        scaleLabel:{
                            display: true,
                            labelString: 'Periodo diario'
                        }
                    }]


            ,
                title:{
                    display: true,
                    fontSize: 20,
                    text: "Nivel do Oxigenio (O2) "
                },
                labels: "bold"
            }}


        


        }
        this.state4 = {
            type: 'line',
        data: {
            labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
            datasets: [
                {
                label: "Temperatura da Agua em ºC ",
                data: [16,17,18,20,21,22,20,16,18,18,20,21,22,20],
                borderWidth: 6,
                borderColor: 'rgba(255,64,64, 0.5)',
                backgroundColor: 'transparent'
                },]
        },
        options: {
            scales:{
                // edita a escala A  para começar do zero!
                yAxes: [
                    {
                      ticks:{
                          beginAtZero: true,
                          max: 50
                      },
                      scaleLabel:{
                          display: true,
                          labelString: 'Temperatura',
                          label: "bold",
                      }
                      
                    }

                ],
                xAxes:[{
                    scaleLabel:{
                        display: true,
                        labelString: 'Periodo hora a hora'
                    }
                }]


            },
            title:{
                display: true,
                fontSize: 20,
                text: "Temperatura da agua em ºC "
            },
            labels: "bold"
        }




        }
        this.state5 ={

            type: 'line',
        data: {
            labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
            datasets: [
                {
                label: "Nivel de NH3 por grama por litro (mg/L) ",
                data: [16,17,18,20,21,22,20,16,18,18,20,21,22,20],
                borderWidth: 6,
                borderColor: 'rgba(0,113,233, 0.5)',
                backgroundColor: 'transparent'
            },
        ]},
        options: {
            scales:{
                // edita a escala A  para começar do zero!
                yAxes: [
                    {
                      ticks:{
                          beginAtZero: true,
                          
                      },
                      scaleLabel:{
                          display: true,
                          labelString: 'mg/L​',
                          label: "bold",
                      }
                      
                    }

                ],
                xAxes:[{
                    scaleLabel:{
                        display: true,
                        labelString: 'Periodo semanal'
                    }
                }]


            },
            title:{
                display: true,
                fontSize: 20,
                text: "Amônia (NH​3​)"
            },
            labels: "bold"
        }



        }
        this.state6 ={

            type: 'line',
        data: {
            labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
            datasets: [
                {
                label: "Nivel de NH4 por grama por litro (mg/L) ",
                data: [16,17,18,20,21,22,20,16,18,18,20,21,22,20],
                borderWidth: 6,
                borderColor: 'rgba(0,113,233, 0.5)',
                backgroundColor: 'transparent'
            },
        ]},
        options: {
            scales:{
                // edita a escala A  para começar do zero!
                yAxes: [
                    {
                      ticks:{
                          beginAtZero: true,
                          
                      },
                      scaleLabel:{
                          display: true,
                          labelString: 'mg/L​',
                          label: "bold",
                      }
                      
                    }

                ],
                xAxes:[{
                    scaleLabel:{
                        display: true,
                        labelString: 'Periodo semanal'
                    }
                }]


            },
            title:{
                display: true,
                fontSize: 20,
                text: "Amônia (NH4​)"
            },
            labels: "bold"
        }



        }



    }

    openModalCreate() {
        this.setState({createOpen: true});
    }
        closeModalCreate() {
        this.setState({createOpen: false});
    }
    create(){
        alert("Create não Funcionando!");
        window.location.reload();



    }
    state = {
        isOpen: false
    }

    render() {
    return (
      <div className="BlocoDeCartoes">
      <header className="App-header">          
      <CardDeck className="CardMonitoramento">
              <Card border="info" style={{ width: '18rem' }}>                
                <Card.Body >
                  <Card.Title>Cultivo de  Tilapia </Card.Title>
                  <Card.Text>
                  Infos do cultivo
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button onClick={(e) => this.setState({ isOpen: true})} className="bota"variant="primary">Monitoramento</Button>
                     <DialogScreen
                       isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                         <CardDeck className="deckOpen">
                            <Card>
                              
                              <Card.Body>
                                <Card.Title>Nivel do Ph</Card.Title>
                                <Card.Text>
                                <Line className="grafico"
                                        options={{
                                        responsive: true  
                                         }}
                                        data={this.state2.data}
                                />
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Button onClick={(e) => this.setState({ isOpen: true})}size="sm"className="bota2" variant="primary">max</Button>
                                
                                
                              </Card.Footer>
                            </Card>
                            <Card>
                             
                              <Card.Body>
                                <Card.Title>Amonio nh4</Card.Title>
                                <Card.Text>
                                <Line className="grafico"
                                        options={{
                                        responsive: true  
                                         }}
                                        data={this.state6.data}
                                />
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Button size="sm"className="bota2" variant="primary">max</Button>
                              </Card.Footer>
                            </Card>
                            <Card>
                             
                              <Card.Body>
                                <Card.Title>Temperatura da agua em Cº</Card.Title>
                                <Card.Text>
                                <Line className="grafico"
                                        options={{
                                        responsive: true  
                                         }}
                                        data={this.state4.data}
                                />
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Button size="sm" className="bota2" variant="primary">max</Button>
                              </Card.Footer>
                            </Card>
                          </CardDeck>
                          <CardDeck>
                            <Card>
                              
                              <Card.Body>
                                <Card.Title>Nivel de nh3 por grama por litro(mg/L)</Card.Title>
                                <Card.Text>
                                <Line className="grafico"
                                        options={{
                                        responsive: true  
                                         }}
                                        data={this.state5.data}
                                />
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Button size="sm" className="bota2" variant="primary">max</Button>
                              </Card.Footer>
                            </Card>
                            <Card>
                              
                              <Card.Body>
                                <Card.Title>Nivel de Oxigenio(O2)</Card.Title>
                                <Card.Text>
                                <Line className="grafico"
                                        options={{
                                        responsive: true  
                                         }}
                                        data={this.state3.data}
                                />
                                </Card.Text>
                              </Card.Body>
                              <Card.Footer>
                                <Button size="sm" className="bota2" variant="primary">max</Button>
                              </Card.Footer>
                            </Card>
                            
                          </CardDeck>
                     
                    </DialogScreen>
                </Card.Footer>
              </Card>
              <Card border="info" style={{ width: '18rem' }}>    
                
                <Card.Body>
                  <Card.Title>Povoamento Bagre</Card.Title>
                  <Card.Text>
                  Infos do cultivo
                    
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="bota"variant="primary">Monitoramento</Button>
                </Card.Footer>
              </Card>
              <Card border="info" style={{ width: '18rem' }}>    
                
                <Card.Body>
                  <Card.Title>Povoamento Tilapia 2</Card.Title>
                  <Card.Text>
                   Infos do cultivo


                  </Card.Text>
                </Card.Body>
                <Card.Footer >
                  <Button className="bota" variant="primary">Monitoramento</Button>
                </Card.Footer>
              </Card>
              
            </CardDeck>
            <CardDeck>
              <Card border="info" style={{ width: '18rem' }}>                
                <Card.Body >
                  <Card.Title>Cultivo de  Tilapia </Card.Title>
                  <Card.Text>
                  Infos do cultivo
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="bota"variant="primary">Monitoramento</Button>
                </Card.Footer>
              </Card>
              <Card border="info" style={{ width: '18rem' }}>    
                
                <Card.Body>
                  <Card.Title>Povoamento Bagre</Card.Title>
                  <Card.Text>
                  Infos do cultivo
                    
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="bota" variant="primary">Monitoramento</Button>
                </Card.Footer>
              </Card>
              <Card border="info" style={{ width: '18rem' }}>    
                
                <Card.Body>
                  <Card.Title>Povoamento Tilapia 2</Card.Title>
                  <Card.Text>
                   Infos do cultivo


                  </Card.Text>
                </Card.Body>
                <Card.Footer >
                  <Button className="bota" variant="primary">Monitoramento</Button>
                </Card.Footer>
              </Card>
              
            </CardDeck>
       
      </header>
    </div>
    
    );
  }
}

export default App;
