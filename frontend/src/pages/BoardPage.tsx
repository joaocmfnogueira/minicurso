import { AppLayout, Button, Header, SpaceBetween } from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import NotesBoard from "../components/NotesBoard";


export default function BoardPage() {

    return (
        <div className="full-wh">
        <AppLayout
            contentType="dashboard"
            navigationHide
            toolsHide
            content={
                    
                <ContentLayout 
                    header={
                        <SpaceBetween size="m">
                            <Header
                                variant="h1"
                                description="Esse é seu quadro pessoal de anotações!"
                                actions={
                                    <Button variant="primary" iconName="external">
                                      Logout
                                    </Button>
                                   }
                            >
                                Quadro de anotações
                            </Header>
                        </SpaceBetween>
                    }>
                    <Container>
                        <NotesBoard />
                    </Container>
                </ContentLayout>
            }
        />
        </div>
    )
}