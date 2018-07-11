import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgProgressModule } from 'ngx-progressbar';
import {ActivatedRoute} from "@angular/router";

import { AppComponent } from './app.component';

import { MainPageComponent } from './main-page/main-page.component';
import { WritingComponent } from './sidebar/writing/writing.component';
import { ListeningComponent } from './sidebar/listening/listening.component';
import { ReadingComponent } from './sidebar/reading/reading.component';
import { SpeakingComponent } from './sidebar/speaking/speaking.component';
import { GrammarComponent } from './sidebar/grammar/grammar.component';
import { VocabularyComponent } from './sidebar/vocabulary/vocabulary.component';

import { ContentComponent } from './sidebar/content/content.component';
import { ProseMainComponent } from './prose/prose-main/prose-main.component';

import { SandeshComponent } from './prose/sub-prose/sandesh/sandesh.component';
import { EssaywritingComponent } from './sidebar/writing/essaywriting/essaywriting.component';
import { ParagraphwritingComponent } from './sidebar/writing/paragraphwriting/paragraphwriting.component';
import { NounComponent } from './sidebar/grammar/noun/noun.component';
import { PrepositionComponent } from './sidebar/grammar/preposition/preposition.component';
import { ConversationComponent } from './sidebar/listening/conversation/conversation.component';
import { PracticeComponent } from './sidebar/listening/practice/practice.component';
import { GrammarcontainerComponent } from './sidebar/grammar/grammarcontainer/grammarcontainer.component';
import { WritingcontainerComponent } from './sidebar/writing/writingcontainer/writingcontainer.component';
import { ListeningcontainerComponent } from './sidebar/listening/listeningcontainer/listeningcontainer.component';
import { SpeakingstrategyComponent } from './sidebar/speaking/speakingstrategy/speakingstrategy.component';
import { PhoneticscontainerComponent } from './sidebar/speaking/phoneticscontainer/phoneticscontainer.component';
import { IntphoneticsComponent } from './sidebar/speaking/intphonetics/intphonetics.component';
import { VowelsComponent } from './sidebar/speaking/vowels/vowels.component';
import { TutorialComponent } from './sidebar/speaking/vowels/tutorial/tutorial.component';
import { ExcerciseComponent } from './sidebar/speaking/vowels/excercise/excercise.component';
import { IntvocabularyComponent } from './sidebar/vocabulary/intvocabulary/intvocabulary.component';
import { GamesComponent } from './sidebar/vocabulary/games/games.component';
import { CreamsoncontentComponent } from './sidebar/content/creamsoncontent/creamsoncontent.component';
import { ProsecontentComponent } from './sidebar/content/creamsoncontent/prosecontent/prosecontent.component';
import { ReadingcontainerComponent } from './sidebar/reading/readingcontainer/readingcontainer.component';
import { ReadingstrategyComponent } from './sidebar/reading/readingcontainer/readingstrategy/readingstrategy.component';
import { MainwritingcontainerComponent } from './sidebar/writing/mainwritingcontainer/mainwritingcontainer.component';
import { WritingstrategyComponent } from './sidebar/writing/mainwritingcontainer/writingstrategy/writingstrategy.component';
import { MainlisteningcontainerComponent } from './sidebar/listening/mainlisteningcontainer/mainlisteningcontainer.component';
import { ListeningstrategyComponent } from './sidebar/listening/mainlisteningcontainer/listeningstrategy/listeningstrategy.component';
import { MaingrammarcontainerComponent } from './sidebar/grammar/maingrammarcontainer/maingrammarcontainer.component';
import { IntgrammarComponent } from './sidebar/grammar/maingrammarcontainer/intgrammar/intgrammar.component';
import { ContentfileComponent } from './sidebar/content/contentfile/contentfile.component';
import { WebcontentComponent } from './sidebar/content/webcontent/webcontent.component';
import { DemoproseComponent } from './sidebar/content/creamsoncontent/prosecontent/demoprose/demoprose.component';

import { CrosswordComponent } from './sidebar/content/crossword/crossword.component';
import { McqComponent } from './sidebar/content/mcq/mcq.component';
import { UnseenComponent } from './sidebar/reading/unseen/unseen.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarexComponent } from './navbarex/navbarex.component';
import { SidebarexComponent } from './sidebarex/sidebarex.component';
import { AudioRecComponent } from './audio-rec/audio-rec.component';
import { SpeakingactivityComponent } from './sidebar/speaking/speakingactivity/speakingactivity.component';
import { LetsspeakComponent } from './sidebar/speaking/speakingactivity/letsspeak/letsspeak.component';
import { BeanarratorComponent } from './sidebar/speaking/speakingactivity/beanarrator/beanarrator.component';
import { PoetryComponent } from './sidebar/reading/poetry/poetry.component';
import { VideoIiComponent } from './sidebar/reading/poetry/video-ii/video-ii.component';
import { DramaComponent } from './sidebar/reading/drama/drama.component';
import { VideoIiiComponent } from './sidebar/reading/drama/video-iii/video-iii.component';
import { VideoIvComponent } from './sidebar/reading/unseen/video-iv/video-iv.component';
import { VideoVComponent } from './sidebar/reading/unseen/video-v/video-v.component';
import { VideosComponent } from './sidebar/writing/videos/videos.component';
import { VideoIComponent } from './sidebar/writing/videos/video-i/video-i.component';
import { LetterVideoComponent } from './sidebar/writing/videos/letter-video/letter-video.component';
import { PicdescriberComponent } from './sidebar/speaking/speakingactivity/picdescriber/picdescriber.component';
import { ConversationsComponent } from './sidebar/speaking/speakingactivity/conversations/conversations.component';
import { SubPageComponent } from './sidebar/speaking/speakingactivity/sub-page/sub-page.component';
import { AComponent } from './sidebar/speaking/speakingactivity/sub-page/a/a.component';

import { TfComponent } from './sidebar/content/tf/tf.component';
import { MatchthefollowingComponent } from './sidebar/content/matchthefollowing/matchthefollowing.component';
import { FilltheblanksComponent } from './sidebar/content/filltheblanks/filltheblanks.component';

import { SelfassesmentComponent } from './selfassesment/selfassesment.component';
import { MyactivityComponent } from './myactivity/myactivity.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
          { path: 'login',                component: LoginComponent},
          { path: 'mainpage',             component: MainPageComponent},
          { path: 'Writing',              component: WritingComponent},
          { path: 'Listening',            component: ListeningComponent},
          { path: 'Reading',              component: ReadingComponent},
          { path: 'Speaking',             component: SpeakingComponent},
          { path: 'Grammar',              component: GrammarComponent},
          { path: 'Vocabulary',           component: VocabularyComponent},
          { path: 'Content',              component: ContentComponent},

          { path: 'Prose',                component: ProseMainComponent},
          
          { path: 'Reading/Prose',        component: ReadingcontainerComponent},
          { path: 'Reading/Poetry',       component: PoetryComponent},
          { path: 'Reading/Drama',        component: DramaComponent},

          { path: 'Video',                component: SandeshComponent},
          { path: 'VideoII',              component: VideoIiComponent},
          { path: 'VideoIII',             component: VideoIiiComponent},
          { path: 'VideoIV',              component: VideoIvComponent},

          { path: 'Writing/Essay',        component: EssaywritingComponent},
          { path: 'Writing/Paragraph',    component: ParagraphwritingComponent},
          { path: 'Writing/Letter',       component: MainwritingcontainerComponent},

          { path: 'Essay/Video',          component: VideoIComponent},
          { path: 'Paragraph/Video',      component: VideosComponent},
          { path: 'Letter/Video',         component: LetterVideoComponent},

          { path: 'Noun',                 component: NounComponent},
          { path: 'Preposition',          component: PrepositionComponent},
          { path: 'Conversation',         component: ConversationComponent},
          { path: 'Practice',             component: PracticeComponent},
          { path: 'WritingContainer',     component: WritingcontainerComponent},
          { path: 'ListeningContainer',   component: ListeningcontainerComponent},
          { path: 'SpeakingStrategy',     component: SpeakingstrategyComponent},
          { path: 'Phonetics',            component: PhoneticscontainerComponent},
          { path: 'IntroPhonetics',       component: IntphoneticsComponent},
          { path: 'GrammarContainer',     component: GrammarcontainerComponent},

          { path: 'PhoneticsSound',       component: VowelsComponent},
          { path: 'VowelsTutorial',       component: TutorialComponent},
          { path: 'PictureDescriber',     component: PicdescriberComponent},
          { path: 'Conversation/Video',   component: AComponent},
          { path: 'Des/Video',            component: SubPageComponent},
      
          
          { path: 'VowelsExcercise',      component: ExcerciseComponent},
          { path: 'IntroVocabulary',      component: IntvocabularyComponent},
          { path: 'Games',                component: GamesComponent},
          { path: 'CreamsonContent',      component: CreamsoncontentComponent},
          { path: 'getContentList/id/:id',    component: ProsecontentComponent},
          // { path: 'ProseContent',         component: ProsecontentComponent},

          // { path: 'ProseContent/:type_name',         component: ProsecontentComponent},
          { path: 'getContent/cid/:cid',  component: DemoproseComponent},

          { path: 'Reading/Prose',        component: ReadingcontainerComponent},
          { path: 'ReadingStrategy',      component: ReadingstrategyComponent},

          { path: 'WritingStrategy',      component: WritingstrategyComponent},
          { path: 'ListeningStrategy',    component: ListeningstrategyComponent},
          { path: 'Listening/Practice',   component: MainlisteningcontainerComponent},
          { path: 'PrepositionCon',          component: MaingrammarcontainerComponent},
          { path: 'IntGrammar',           component: IntgrammarComponent},
          { path: 'FileContent',          component: ContentfileComponent},
          { path: 'WebContent',           component: WebcontentComponent},
          // { path: 'Demoprose',            component: DemoproseComponent},
          { path: 'Assesment',            component: SelfassesmentComponent},
          { path: 'Crossword',            component: CrosswordComponent},
          { path: 'Unseen',               component: UnseenComponent},
          { path: 'Mcq',                  component: McqComponent},

          { path: 'Working',      component: VideoVComponent},

          
          { path: 'SpeakingActvity',      component: SpeakingactivityComponent},

          { path: 'Narrator',             component: BeanarratorComponent},
          { path: 'PicDescriber',         component: PicdescriberComponent},
          { path: 'Conversations',        component: ConversationsComponent},
          // { path: 'getContent/cid/:cid',  component: DemoproseComponent},
          // { path: 'getContent/cid/2',  component: PoetryComponent},
          // { path: 'getContent/cid/3',  component: DramaComponent},
          { path: 'Assesment',            component: SelfassesmentComponent},
          { path: 'Crossword',            component: CrosswordComponent},
          { path: 'Unseen',               component: UnseenComponent},
          { path: 'getContent/cid/1/mcq',      component: McqComponent},
          { path: 'getContent/cid/1/tf',                  component: TfComponent},
          { path: 'getContent/cid/1/fib',                  component: FilltheblanksComponent},
          { path: 'getContent/cid/1/mtf',                  component: MatchthefollowingComponent},
          { path: 'Letsspeak',            component: LetsspeakComponent},
          { path: 'Myactivity',            component: MyactivityComponent}

          
          ];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WritingComponent,
    ListeningComponent,
    ReadingComponent,
    SpeakingComponent,
    GrammarComponent,
    VocabularyComponent,
    ContentComponent,
    ProseMainComponent,
    SandeshComponent,
    EssaywritingComponent,
    ParagraphwritingComponent,
    NounComponent,
    PrepositionComponent,
    ConversationComponent,
    PracticeComponent,
    GrammarcontainerComponent,
    WritingcontainerComponent,
    ListeningcontainerComponent,
    SpeakingstrategyComponent,
    PhoneticscontainerComponent,
    IntphoneticsComponent,
    VowelsComponent,
    TutorialComponent,
    ExcerciseComponent,
    IntvocabularyComponent,
    GamesComponent,
    CreamsoncontentComponent,
    ProsecontentComponent,
    ReadingcontainerComponent,
    ReadingstrategyComponent,
    MainwritingcontainerComponent,
    WritingstrategyComponent,
    MainlisteningcontainerComponent,
    ListeningstrategyComponent,
    MaingrammarcontainerComponent,
    IntgrammarComponent,
    ContentfileComponent,
    WebcontentComponent,
    DemoproseComponent,
    SelfassesmentComponent,
    CrosswordComponent,
    McqComponent,
    UnseenComponent,
    LoginComponent,
    NavbarComponent,
    NavbarexComponent,
    SidebarexComponent,
    AudioRecComponent,
    SpeakingactivityComponent,
    LetsspeakComponent,
    BeanarratorComponent,
    PoetryComponent,
    VideoIiComponent,
    DramaComponent,
    VideoIiiComponent,
    VideoIvComponent,
    VideoVComponent,
    VideosComponent,
    VideoIComponent,
    LetterVideoComponent,
    PicdescriberComponent,
    ConversationsComponent,
    SubPageComponent,
    TfComponent,
    MatchthefollowingComponent,
    FilltheblanksComponent,
    AComponent,
    MyactivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
