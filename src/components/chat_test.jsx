import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	Avatar,
	AvatarGroup,
	ConversationHeader,
	VoiceCallButton,
	VideoCallButton,
	InfoButton,
	TypingIndicator,
	MessageSeparator,
	ConversationList,
	Conversation,
	ExpansionPanel,
	Sidebar,
	Search
	// messageInputValue,
	// setMessageInputValue
} from '@chatscope/chat-ui-kit-react';
import React, { Component } from 'react';
import logo from '../logo.svg';

export default class ChatTest extends Component {
	state = {
		// messageInputValue: 'test'
		messageList: [
			{
				message: 'asder',
				sentTime: '13 mins ago',
				sender: 'tester',
				direction: 'outgoing',
				position: 'last'
			}
		]
	};
	setMessageInputValue(val) {
		// console.log(val);
		// return (
		// 	<Message
		// 		model={{
		// 			message: 'Hello sfsdfsfsdfd',
		// 			sentTime: '15 mins ago',
		// 			sender: 'Patrik',
		// 			direction: 'outgoing',
		// 			position: 'last'
		// 		}}
		// 	/>
		// );
	}

	onClick(message) {
		console.log(this.state.messageList);
		console.log(message);
		// return val;
		const x =
			// <Message
			// 	key={1}
			// 	model={{
			// 		message: message,
			// 		sentTime: '15 mins ago',
			// 		sender: 'Patrik',
			// 		direction: 'outgoing',
			// 		position: 'last'
			// 	}}
			// />
			{
				message: message,
				sentTime: '13 mins ago',
				sender: 'tester',
				direction: 'outgoing',
				position: 'last'
			};
		let messageList = [ ...this.state.messageList ];
		messageList.push(x);
		console.log(this.state.messageList);
		this.setState({ messageList });
		return x;
	}

	messageInputValue() {
		// return 'sfsdfsf';
		console.log('state change');
	}
	render() {
		// const messageInputValue = '';

		const { emilyIco, lillyIco, joeIco, kaiIco, akaneIco, patrikIco, eliotIco, zoeIco } = logo;
		return (
			<div
				style={{
					height: '600px',
					position: 'relative'
				}}
			>
				<MainContainer responsive>
					<Sidebar position="left" scrollable={false}>
						<Search placeholder="Search..." />
						<ConversationList>
							<Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
								<Avatar src={lillyIco} name="Lilly" status="available" />
							</Conversation>

							<Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
								<Avatar src={joeIco} name="Joe" status="dnd" />
							</Conversation>

							<Conversation
								name="Emily"
								lastSenderName="Emily"
								info="Yes i can do it for you"
								unreadCnt={3}
							>
								<Avatar src={emilyIco} name="Emily" status="available" />
							</Conversation>

							<Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
								<Avatar src={kaiIco} name="Kai" status="unavailable" />
							</Conversation>

							<Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
								<Avatar src={akaneIco} name="Akane" status="eager" />
							</Conversation>

							<Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
								<Avatar src={eliotIco} name="Eliot" status="away" />
							</Conversation>

							<Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you" active>
								<Avatar src={zoeIco} name="Zoe" status="dnd" />
							</Conversation>

							<Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
								<Avatar src={patrikIco} name="Patrik" status="invisible" />
							</Conversation>
						</ConversationList>
					</Sidebar>

					<ChatContainer>
						<ConversationHeader>
							<ConversationHeader.Back />
							<Avatar src={zoeIco} name="Zoe" />
							<ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
							<ConversationHeader.Actions>
								<VoiceCallButton />
								<VideoCallButton />
								<InfoButton />
							</ConversationHeader.Actions>
						</ConversationHeader>
						<MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
							<MessageSeparator content="Saturday, 30 November 2019" />

							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'single'
								}}
							>
								<Avatar src={zoeIco} name="Zoe" />
							</Message>

							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Patrik',
									direction: 'outgoing',
									position: 'single'
								}}
								avatarSpacer
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'first'
								}}
								avatarSpacer
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'normal'
								}}
								avatarSpacer
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'normal'
								}}
								avatarSpacer
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'last'
								}}
							>
								<Avatar src={zoeIco} name="Zoe" />
							</Message>

							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Patrik',
									direction: 'outgoing',
									position: 'first'
								}}
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Patrik',
									direction: 'outgoing',
									position: 'normal'
								}}
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Patrik',
									direction: 'outgoing',
									position: 'normal'
								}}
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Patrik',
									direction: 'outgoing',
									position: 'last'
								}}
							/>

							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'first'
								}}
								avatarSpacer
							/>
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: '15 mins ago',
									sender: 'Zoe',
									direction: 'incoming',
									position: 'last'
								}}
							>
								{/* {this.state.messageList.map(() => this.state.messages)} */}

								{this.state.messageList.map((x, i) => console.log(x, i))}
								<Avatar src={zoeIco} name="Zoe" />
							</Message>
							{this.state.messageList.map((x, i) => {
								const z = (
									<Message
										key={i}
										model={{
											message: x,
											sentTime: '15 mins ago',
											sender: 'Patrik',
											direction: 'outgoing',
											position: 'last'
										}}
									/>
								);
								console.log(z);
								return z;
							})}
						</MessageList>
						<MessageInput
							placeholder="Type message here"
							value={this.messageInputValue()}
							onChange={(val) => this.setMessageInputValue(val)}
							onSend={(val) => {
								this.onClick(val);
								return this.setMessageInputValue('');
							}}
						/>
					</ChatContainer>

					<Sidebar position="right">
						<ExpansionPanel open title="INFO">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
						<ExpansionPanel title="LOCALIZATION">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
						<ExpansionPanel title="MEDIA">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
						<ExpansionPanel title="SURVEY">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
						<ExpansionPanel title="OPTIONS">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
					</Sidebar>
				</MainContainer>
			</div>
		);
	}

	/* temp_render() {
		<div
			style={{
				height: '500px'
			}}
		>
			<ChatContainer>
				<MessageList typingIndicator={<TypingIndicator content="Joe is typing" />}>
					<MessageSeparator content="Saturday, 30 November 2019" />

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'single'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'single'
						}}
					/>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'first'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'normal'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'normal'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'last'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'first'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'normal'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'normal'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'last'
						}}
					/>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'first'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'last'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>

					<MessageSeparator content="Saturday, 31 November 2019" />

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'single'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'single'
						}}
					/>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'first'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'normal'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'normal'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'last'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'first'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'normal'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'normal'
						}}
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: localSender,
							direction: 'outgoing',
							position: 'last'
						}}
					/>

					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'first'
						}}
						avatarSpacer
					/>
					<Message
						model={{
							message: 'Hello my friend',
							sentTime: '15 mins ago',
							sender: 'Joe',
							direction: 'incoming',
							position: 'last'
						}}
					>
						<Avatar src={joeIco} name={'Joe'} />
					</Message>
				</MessageList>
			</ChatContainer>
		</div>;
    }
    */
	tester_render() {
		const zoeIco = logo;
		const eliotIco = logo;
		const { emilyIco, lillyIco, joeIco, kaiIco, akaneIco, patrikIco } = logo;
		return (
			<div style={{ position: 'relative', height: '500px' }}>
				<MainContainer>
					<Sidebar position="right">
						<ExpansionPanel title="OPTIONS">
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
							<p>Lorem ipsum</p>
						</ExpansionPanel>
					</Sidebar>
					<ChatContainer>
						<ConversationHeader>
							<Avatar src={zoeIco} name="Kai" />
							<ConversationHeader.Content userName="Kai" info="Active 10 mins ago" />
							<ConversationHeader.Actions>
								<VoiceCallButton />
								<VideoCallButton />
								<InfoButton />
							</ConversationHeader.Actions>
						</ConversationHeader>

						{/* <MessageList> */}
						<MessageList typingIndicator={<TypingIndicator content="Emily is typing" />}>
							<MessageSeparator content="Saturday, 30 November 2019" />
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: 'just now',
									direction: 'incoming',
									sender: 'Joe'
								}}
							/>
							<Avatar src={zoeIco} name={'Zoe'} />
							<Message
								model={{
									message: 'Hello my friend',
									sentTime: 'just now',
									direction: 'outgoing',
									sender: 'Joe'
								}}
							/>
							<Avatar src={zoeIco} name={'Zoe'} />

							<AvatarGroup size="md">
								<Avatar src={eliotIco} name="Eliot" />

								<Avatar src={zoeIco} name="Zoe" />
							</AvatarGroup>
						</MessageList>
						<MessageInput placeholder="Type message here" />
					</ChatContainer>
					<ConversationList>
						<Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
							<Avatar src={lillyIco} name="Lilly" />
						</Conversation>

						<Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
							<Avatar src={joeIco} name="Joe" />
						</Conversation>

						<Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
							<Avatar src={emilyIco} name="Emily" />
						</Conversation>

						<Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
							<Avatar src={kaiIco} name="Kai" />
						</Conversation>

						<Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
							<Avatar src={akaneIco} name="Akane" />
						</Conversation>

						<Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
							<Avatar src={eliotIco} name="Eliot" />
						</Conversation>

						<Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
							<Avatar src={zoeIco} name="Zoe" />
						</Conversation>

						<Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
							<Avatar src={patrikIco} name="Patrik" />
						</Conversation>
					</ConversationList>
				</MainContainer>
			</div>
		);
	}
}
