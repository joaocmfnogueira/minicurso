parei em: Estamos utilizando o conceito de props para receber variáveis de outro componente, e renderizar o modal dinamicamente.
O TypeScript exige que definamos o tipo das variáveis. Faremos isso com uma definição de interface, logo acima da definição da função do NoteModal:
interface NoteModalProps {
 visible: boolean;
 setVisible: Function;
}
em https://docs.google.com/document/d/1C1tbNMvYrvUtgDyq-Y-22HgjYFDg3raX9cKtJUdNMqo/edit#