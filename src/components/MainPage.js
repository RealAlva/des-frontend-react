import React from 'react';
import '../styles/MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            {/* Header Section */}
            <section className="header-section">
                <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section">
                <h2>Bienvenido</h2>
                <hr className="green-line" />  {/* Línea verde agregada */}
                <p>
                    Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, el manejo de <b>hooks</b>, y el uso de <b>Redux</b>.
                </p>
            </section>

            {/* Topics Section */}
            <section className="topics-section">
                <h2>Temas Cubiertos</h2>
                <hr className="green-line" />
                <table className="topics-table">
                    <thead>
                        <tr>
                            <th>Componentes funcionales y de clase</th>
                            <th>Uso de <strong>React hooks</strong> como <strong>useState</strong> y useEffect</th>
                            <th>Creación de <strong>custom hooks</strong> como useForm</th>
                            <th>Gestión de variables de estado con <strong>useState</strong></th>
                            <th>Gestión de estado global con <strong>Redux</strong></th>
                            <th>Integración de <strong>Redux</strong> con <strong>React</strong></th>
                            <th>Manejo de <strong>Formularios</strong> en <strong>React</strong></th>
                            <th>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></th>
                        </tr>
                    </thead>
                </table>
            </section>
            {/* Resources Section */}
            <section className="resources-section">
                <h2>Recursos Adicionales</h2>
                <hr className="green-line" />  {/* Línea verde agregada */}
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
            </section>
        </div>
    );
};

export default MainPage;