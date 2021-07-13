import { Colors } from '../constants';

export default {
  
  loader: {
    marginTop: 20,
  },
  noData: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 2,
    borderLeftColor: Colors[1],
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors[4],
    borderStyle: 'solid',
    fontFamily: 'Ubuntu-Light',
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 30,
    padding: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  switchText: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
  },
  ContenedorEstilizado: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.primario,
  },
  ContenedorInterno: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  TituloPagina: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: Colors.marca,
  },
  SubTitulo: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: Colors.terciario,
  },
  AreaFormularioEstilizado: {
    width: "90%",
    borderColor: "#20232a",
    borderRadius: 6,
  },
  TextoEntradaEstilizado: {
    borderColor: "#20232a",
    borderRadius: 6,
    color: Colors.secundario,
    paddingTop: 15,
    paddingRight: 55,
    paddingBottom: 15,
    paddingLeft: 55,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: Colors.terciario,
    fontFamily: 'Ubuntu-Light'
  },
  EtiquetaEntradaEstilizado: {
    color: Colors.terciario,
    fontSize: 13,
    textAlign: "left",
    fontFamily: 'Ubuntu-Medium',
    borderColor: "#20232a",
    borderRadius: 6,
  },
  IconoIzquierdo: {
    left: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  IconoDerecho: {
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  BotonEstilizado: {
    backgroundColor: Colors.marca,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginVertical: 5,
    height: 60,
    fontFamily: 'Ubuntu-Regular',
  },
  BotonTexto: {
    fontSize: 16,
    color: "white",
    fontFamily: 'Ubuntu-Regular',
  },
  CajaMensaje: {
    textAlign: "center",
    fontSize: 13,
  },
  Linea: {
    height: 1,
    width: "100%",
    marginVertical: 10,
    color: Colors.luzoscuro,
  },
  VistaExtra: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  TextoExtra: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 15,
    color: Colors.terciario,

  },
  EnlaceTexto: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Ubuntu-Regular',
  },
  ContenidoEnlaceTexto: {
    color: Colors.marca,
    fontSize: 15,
    fontFamily: 'Ubuntu-Regular',
  },
};