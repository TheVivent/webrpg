import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../libs/user/UserContext';
import SocketContext from '../libs/socket/SocketContext';
import SocketMessages from '../libs/socket/SocketMessages';
import { Redirect } from 'react-router-dom';
import { getCookie } from '../libs/socket/Socket';
import useBreakpoint from 'bootstrap-5-breakpoint-react-hook'; //eslint-disable-line
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Chat from './Chat';
import PlayersPanel from './PlayersPanel';

const Game = (props) => {
	const id = props.match.params.id;
	const currentBreakpoint = useBreakpoint();
	const [user] = useContext(UserContext);
	const [panelState, setPanelState] = useState({
		isMobile: false,
		isBig: false,
	});
	const [chat, setChat] = useState(null)
	const socket = useContext(SocketContext)

	// aktualizacja czy w trybie mobilnym
	useEffect(() => {
		const isMobile = ['xs', 'sm'].includes(currentBreakpoint);
		setPanelState({
			...panelState,
			isMobile: isMobile,
		});
	}, [currentBreakpoint]);

	useEffect(()=>{
		socket.registerOnMessageEvent(SocketMessages.GAME_GET_CHAT, (data)=>{
			setChat(data.chat)
		})

	}, [])

	// obsługa wejścia/wyjścia z pokoju
	useEffect(()=>{
		socket.sendJSON({
			type: SocketMessages.GAME_JOIN,
			room_id: id
		})

		return () => {
			socket.sendJSON({
				type: SocketMessages.GAME_EXIT,
			})
		}

	}, [])

	// aktualizacja czy kliknięto przycisk powiększenia panelu w trybie mobilnym
	const togglePanelState = () => {
		setPanelState({
			...panelState,
			isBig: !panelState.isBig,
		});
	};

	// jeżeli użytkownik nie jest zalogowany, to
	// przekieruj na stronę główną
	if (!user.logged) {
		// jeżeli jest ustawione cookie, to user pewnie jest zalogowany
		// tylko auto-logowanie jeszcze się nie odbyło
		if (!getCookie('id')) {
			return <Redirect to="/" />;
		}
	}

	return (
		<Container fluid className="p-0 m-0 game">
			<Row className="p-0 m-0 h-100 overflow-hidden">
				{/* main area */}
				<Col className="h-100 m-0">{id}</Col>

				{/* panel */}
				<Col
					xs={{ span: 12, order: 'first' }}
					md={{ span: 5, order: 'last' }}
					lg="4"
					xl="3"
					className={`m-0 p-0 gamePanel ${
						panelState.isBig ? 'h-100' : null
					}`}
				>
					<Container fluid className="h-100 m-0 p-0">
						{/* tutaj cała zawartość panelu */}
							<span className={!panelState.isMobile || panelState.isBig ?null:"d-none"}>
								<Row
									className="m-0 p-0"
									style={{
										height: '65%',
									}}
								>
									<Col>
										<PlayersPanel />
									</Col>
								</Row>
								<Row
									className="m-0 p-0"
									style={{
										height: `${
											31 + (panelState.isMobile ? 0 : 4)
										}%`,
										backgroundColor: 'green',
									}}
								>
									<Col>
										<Chat />
									</Col>
								</Row>
							</span>

						<Row
							className="m-0 p-0"
							style={{
								height: `${1 - (panelState.isMobile ? 0 : 1)}%`,
								backgroundColor: 'blue',
							}}
						>
							<Col className="m-0 p-0">
								{/* przycisk do pokazywania / ukrywania panelu w trybie mobilnym */}
								{panelState.isMobile ? (
									<div
										role="button"
										tabIndex="0"
										className="w-100 h-100 text-center bg-primary"
										style={{ color: 'white' }}
										onClick={() => togglePanelState()}
										onKeyDown={() => togglePanelState()}
									>
										<MaterialIcon icon="drag_handle" />
									</div>
								) : null}
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default withRouter(Game);
