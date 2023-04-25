/// <reference path="assets/jquery/jquery-3.6.4/jquery-3.6.4.js" />
/// <reference path="Publicfunction.js" />


"use strict";
var App={
    $modular:[],
    Config:{
        APP:{
            Icon:'s',//this is app Icone.
            ServerURL:{
                //All Server URL in this Object.
                OnlineTransAction:{
                    WebSocket:'',
                    XMPP:'',
                    MQTT:''
                },
                Blob:{
                    //All Server Blob URL for get Documents.
                    Img:'',
                    Video:'',
                    Document:''
                },
                //This is array of SwaggerUrl for all Swagger.
                //in this is array set ALL SwaggerUrl.
                SwaggerURL:[]
            },
            Status:'Online',
        },
        AccountS:{
            AuthenticationCode:{
                DiviseSectionID:'',//this Code create Difrence between User Client Dvise
                ActiveProfile:{
                    ActiveProfileID:'', //User AuthenticationID
                    ActiveProfileNumberOfArray:0 //Number of active profile in array
                }
                
            },
            Profile:[
                {
                    ID:'',
                    PhoneNumber:'',
                    Image:[
                        'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                        '1quY47&Cl!Ge3cValxa&#o$MMipcG%a!z6^0',
                        'aeDy%j4p7Yay&C7iIj7IJW@9P@Qp%iIasnw#'
                    ],
                    UserName:'',
                    Bio:'',
                    GeneralSettings:{
                        TextSize:20,
                        ChatBackground:'EsPQqffHxTdyGbhWWexXavxVrzYNGMqRpxqE',
                        Template:'System.css, Dark.css or  light.css or other',
                        DateTimeFormat:{
                            Calendar:'fa-IR', //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
                            Time:24 //'12 Hour || 24 Hour'
                        },
                        NightMode:false,
                        ChatListView:'Two Lines',//||Three Lines
                        Animations:true,
                        AutoNightMode:false,
                        
                    },
                    Notification:{
                        GeneralCondition:false,//if this is false all Notification is false else this is true all Notification run refrence
                        PrivateMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        PrivateCall:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        GroupsMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        GroupsCall:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        ChannelsMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        Other:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        }
                    },
                    PrivacyAndSecurity:{
                        EncryptionCode:'0GYr0r7HG%4xwcwgmSr*Q7WkQGaI!Fz7JYP#'
                        //This part must be empty because controlling this part is related to the server side and has nothing to do with the client side
                    },
                    ChatFolder:[
                        //All the groupings that the user has considered for her chat categories
                        {
                            ID:'2',
                            Name:'ارز',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'4',
                            Name:'فیلم',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'6',
                            Name:'فیلم',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'8',
                            Name:'فیلم',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'3',
                            Name:'3',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                            Name:'فیلم',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        }
                    ],
                    Language:'en-Us',
                    StickersAndEmoji:[
                        'ACejsBgBtzTGtcZHBEAHuKJFMjSMYggxCDsS',
                        'cCVxFYfZTdAFtWEHqvbeWafeanNvFMtThKBz',
                        'VdyAyJxdSeaNjzncGArecfVYXHKreDTeKTnt'
                    ]
                },
                {
                    ID:'',
                    PhoneNumber:'',
                    Image:[
                        'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                        '1quY47&Cl!Ge3cValxa&#o$MMipcG%a!z6^0',
                        'aeDy%j4p7Yay&C7iIj7IJW@9P@Qp%iIasnw#'
                    ],
                    UserName:'',
                    Bio:'',
                    GeneralSettings:{
                        TextSize:20,
                        ChatBackground:'EsPQqffHxTdyGbhWWexXavxVrzYNGMqRpxqE',
                        Template:'System.css, Dark.css or  light.css or other',
                        DateTimeFormat:{
                            Calendar:'fa-IR', //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
                            Time:24 //'12 Hour || 24 Hour'
                        },
                        NightMode:false,
                        ChatListView:'Two Lines',//||Three Lines
                        Animations:true,
                        AutoNightMode:false,
                        
                    },
                    Notification:{
                        GeneralCondition:false,//if this is false all Notification is false else this is true all Notification run refrence
                        PrivateMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        PrivateCall:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        GroupsMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        GroupsCall:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        ChannelsMessage:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        },
                        Other:{
                            Notification:true,
                            Vibrate:true,
                            Ringtone:'',
                        }
                    },
                    PrivacyAndSecurity:{
                        EncryptionCode:'0GYr0r7HG%4xwcwgmSr*Q7WkQGaI!Fz7JYP#'
                        //This part must be empty because controlling this part is related to the server side and has nothing to do with the client side
                    },
                    ChatFolder:[
                        //All the groupings that the user has considered for her chat categories
                        {
                            ID:'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                            Name:'Unread',
                            visible:false,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                            Name:'ارز',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        },
                        {
                            ID:'qp1%@Qj2Zlk5Zd%!7xYEij&bzoUf$MymR6uP',
                            Name:'فیلم',
                            visible:true,
                            Editable:true,
                            Deleteble:false
                        }
                    ],
                    Language:'en-Us',
                    StickersAndEmoji:[
                        'ACejsBgBtzTGtcZHBEAHuKJFMjSMYggxCDsS',
                        'cCVxFYfZTdAFtWEHqvbeWafeanNvFMtThKBz',
                        'VdyAyJxdSeaNjzncGArecfVYXHKreDTeKTnt'
                    ]
                }
            ]
        }
        
        
    },
    web:{
        $Control:{
            $Main:null
        },
        left:{
            Menu:{
                search:{
                    control:{
                        $Input:null,
                        search:null,
                        $SearchCard:null,
                        $ChatCard:null
                    },
                    init:function(){
                        App.web.left.Menu.search.control.$Input=$('#searchInput');
                        App.web.left.Menu.search.control.$SearchCard=$('#SearchCard');
                        App.web.left.Menu.search.control.$ChatCard=$('#ChatCard');
                        App.web.left.Menu.search.control.$Input.focus(function (e) { 
                            App.web.left.Menu.search.control.$ChatCard.removeClass('Transition__slide--active');
                            App.web.left.Menu.search.control.$SearchCard.addClass('Transition__slide--active');
                            App.web.left.Menu.HambergerMenu.control.$Icone.addClass('state-back');
                        })
                    }
                },
                HambergerMenu:{
                    control:{
                        $control:null,
                        $Icone:null,
                        $SetingMenu:null
                    },
                    init:function(){
                        App.web.left.Menu.HambergerMenu.control.$control=$('#HambergerMenu');
                        App.web.left.Menu.HambergerMenu.control.$Icone=$('.animated-menu-icon',App.web.left.Menu.HambergerMenu.control.$control);
                        App.web.left.Menu.HambergerMenu.control.$SetingMenu=$('#SetingMenu',App.web.left.Menu.HambergerMenu.control.$control);

                        App.web.left.Menu.HambergerMenu.control.$control.click(function (e) { 
                            if(App.web.left.Menu.HambergerMenu.control.$Icone.hasClass('state-back')){
                                App.web.left.Menu.HambergerMenu.control.$Icone.removeClass('state-back');
                                App.web.left.Menu.search.control.$ChatCard.addClass('Transition__slide--active');
                                App.web.left.Menu.search.control.$SearchCard.removeClass('Transition__slide--active');
                            }
                            else if(App.web.left.Menu.HambergerMenu.control.$SetingMenu.hasClass('open')==false)
                            {
                                App.web.left.Menu.HambergerMenu.control.$SetingMenu.addClass('shown').delay(50).queue(function(next){
                                    App.web.left.Menu.HambergerMenu.control.$SetingMenu.addClass('open');
                                    next();
                                });
                                console.log('show menu');
                            }
                            else
                            {
                                App.web.left.Menu.HambergerMenu.control.$SetingMenu.removeClass('open').delay(50).queue(function(next){
                                    App.web.left.Menu.HambergerMenu.control.$SetingMenu.removeClass('shown');
                                    next();
                                });
                                console.log('show menu');
                            }
                            
                        });
                    }
                },
                init:function(){
                    App.web.left.Menu.search.init();
                    App.web.left.Menu.HambergerMenu.init();
                }
            },
            StatusBox:{
                $Control:null,
                AddNewStatus(ID,GroupID,Avatar,Read){
                    $('<div>',{id:ID,"class":"status "+((Read)?'read':''),in:GroupID}).append(
                        $('<img>',{id:ID,"class":"Avatar",src:Avatar})
                    ).click(function(){
                        App.web.Right.Menu.Fn.Show("ShowStatus",ID);
                    }).appendTo(App.web.left.StatusBox.$Control);
                },
                init:function(){
                    App.web.left.StatusBox.$Control=$('#StatusBox');
                    for (let index = 0; index < 50; index++) {
                        App.web.left.StatusBox.AddNewStatus(index,((index%2==0)?index:'3'),"https://da28ojrjakn6f.cloudfront.net/tickets/4355/NEW/img_1650272397_1650273497__1.jpg?v=1.1.0",(index%2==0))
                    }
                }
            },
            ChatFolder:{
                $Control:null,
                CreateFolder:function(ID,Name,CountUnreadMessage,Visible,Editable,Deleteble){
                    $('<div>',{id:ID,"class":"Tab "+((ID=="All")?"Tab--active":"")}).append(
                        $('<span>').append([
                            $('<span>').html(Name),
                            (CountUnreadMessage==null)?"":$('<span>',{"class":"badge Tab__badge--active"}).html(CountUnreadMessage),
                            $('<i>',{"class":"platform animate"})
                        ])
                    ).click(function(){
                        var $this=$(this);
                        App.web.left.ChatFolder.$Control.find('.Tab--active').removeClass('Tab--active');
                        $this.addClass('Tab--active');
                        //*********************************************************** */
                        // When user click the Folder******************************* */
                        // If the first group is *all*, it will display all chats** */
                        // Otherwise, it shows all the items in that chat group*** */
                        //******************************************************* */
                        //App.web.left.ChatList.Control.$ChatList.find('li[in != "2"]').slideUp(500)
                        //App.web.left.ChatList.Control.$ChatList.find('li[in != "2"]').slideDown();
                        if(ID=="All"){
                            
                            App.web.left.ChatList.Control.$ChatList.find('[in]').slideDown(500,function(){
                                //ُStatus
                                App.web.left.StatusBox.$Control.find('[in]').fadeIn(500);
                                //ُStatus
                            });
                            
                        }
                        else if(ID=="Unread"){
                            var LI=App.web.left.ChatList.Control.$ChatList.find('li');
                            var LIBadge= LI.has('div.Badge');
                            LI.not(LIBadge).slideUp(500,function(){
                                LI.has('div.Badge').slideDown(500);
                            });
                            
                            //ُStatus
                            App.web.left.StatusBox.$Control.find('div.status.read').fadeOut(500,function(){
                                App.web.left.StatusBox.$Control.find('div.status:not(.read)').fadeIn(500);
                            });
                            
                            //ُStatus
                        }
                        else{
                            App.web.left.ChatList.Control.$ChatList.find('li[in="'+ID+'"]').slideDown(500,function(){
                                App.web.left.ChatList.Control.$ChatList.find('li[in != "'+ID+'"]').slideUp(500);
                            });
                            
                            //ُStatus
                            App.web.left.StatusBox.$Control.find('div[in="'+ID+'"]').fadeIn()
                            App.web.left.StatusBox.$Control.find('div[in != "'+ID+'"]').fadeOut();
                            //ُStatus
                        }

                        //*********************************************************** */
                        // When user click the Folder******************************* */
                        // If the first group is *all*, it will display all chats** */
                        // Otherwise, it shows all the items in that chat group*** */
                        //******************************************************* */
                        
                    }).appendTo(App.web.left.ChatFolder.$Control);
                },
                init:function(){
                    App.web.left.ChatFolder.$Control= $('#ChatFolder');
                    var C=App.Config.AccountS.Profile[App.Config.AccountS.AuthenticationCode.ActiveProfile.ActiveProfileNumberOfArray].ChatFolder;
                    if(C.length==0){
                        App.web.left.ChatFolder.$Control.html('');
                    }
                    else if(C.length!=0){
                        App.web.left.ChatFolder.CreateFolder('All','All',null,true,false,false);
                        App.web.left.ChatFolder.CreateFolder('Unread','Unread',20,true,false,false);

                        for (let index = 0; index < C.length; index++) {
                            App.web.left.ChatFolder.CreateFolder(C[index].ID,C[index].Name,10,C[index].visible,C[index].Editable,C[index].Deleteble);
                        }
                    }
                    
                    
                }
            },
            ChatList:{
                Control:{
                    $ChatList:null
                },
                AddChatItem:function(ID,GroupID,icon,fullName,Verified,lastmessage,LastMessageTime,CountUnread){
                    $('<li>',{id:ID,class:"ListItem Chat chat-item-clickable private no-selection has-ripple",in:GroupID}).append(
                        $('<a>',{class:"ListItem-button",role:"button",href:"#777000"}).append([
                            $('<div>',{class:"status"}).append([
                                $('<div>',{class:"Avatar size-large color-bg-1"}).append(
                                    $('<img>',{class:"Avatar__media avatar-media opacity-transition slow open shown",src:icon})
                                ),
                                $('<div>',{class:"avatar-badge-wrapper"})
                            ]),
                            $('<div>',{class:"info"}).append(
                                $('<div>',{class:"info-row"}).append([
                                    $('<div>',{class:"title"}).append([
                                        $('<h3>',{class:"fullName"}).html(fullName),
                                        ((Verified)?$('<span>',{class:"VerifiedIcon"}):'')
                                    ]),
                                    $('<div>',{class:"separator"}),
                                    $('<div>',{class:"LastMessageMeta"}).append(
                                        $('<span>',{class:"time"}).html(LastMessageTime)
                                    )
                                ]),
                                $('<div>',{class:"subtitle"}).append(
                                    $('<p>',{class:"last-message shared-canvas-container",dir:"ltr"}).html(lastmessage),
                                    ((CountUnread!=0)?$('<div>',{class:"Badge",dir:"ltr"}).html(CountUnread):'')
                                )
                            ),
                            $('<div>',{class:"ripple-container"})
                        ])
                    ).click(function (e) { 
                        var $this=$(this);
                        if($this.hasClass('selected')){

                        }
                        else
                        {
                            App.web.left.ChatList.Control.$ChatList.find('.selected').removeClass('selected');
                            $this.addClass('selected');
                            App.web.Right.Menu.Fn.Hide();
                        }
                    }).appendTo(App.web.left.ChatList.Control.$ChatList);
                },
                init:function(){
                    App.web.left.ChatList.Control.$ChatList=$('#ChatList');
                }
            },
            init:function(){
                App.web.left.Menu.init();
                App.web.left.StatusBox.init();
                App.web.left.ChatFolder.init();
                App.web.left.ChatList.init();
            }
        },
        Center:{
            Menu:{
                $Control:null,
                init:function(){}
            },
            DialogBox:{
                $Control:null,
                init:function(){},
                AddDialog:function(){}
            },
            MessageCompose:{
                Emoji:{
                    $Control:null,
                    init:function(){}
                },
                MessageInput:{
                    $Control:null,
                    init:function(){}
                },
                AttachMenu:{
                    $Control:null,
                    init:function(){}
                },
                Recorder:{
                    $Control:null,
                    init:function(){}
                },
                init:function(){
                    App.web.Center.MessageCompose.Emoji.init();
                    App.web.Center.MessageCompose.MessageInput.init();
                    App.web.Center.MessageCompose.AttachMenu.init();
                    App.web.Center.MessageCompose.Recorder.init();
                },
            },
            init:function(){
                App.web.Center.Menu.init();
                App.web.Center.DialogBox.init();
                App.web.Center.MessageCompose.init();
            }
        },
        Right:{
            init:function(){
                App.web.Right.Menu.init();
            },
            Menu:{
                Control:{
                    $Control:null,
                    $CloseBTM:null,
                },
                Active:{
                    Job:null,
                    ID:null
                },
                init:function(){
                    App.web.Right.Menu.Control.$CloseBTM=$('#RightColumnWrapperClose').click(function (e) { 
                        App.web.Right.Menu.Fn.Hide();
                    });
                },
                Fn:{
                    DisplayMode:function(){
                        return App.web.$Control.$Main.hasClass('right-column-open');
                    },
                    Show:function(Job,ID){
                        // Job = Status
                        if(App.web.Right.Menu.Active.ID===ID && App.web.Right.Menu.Active.Job===Job && App.web.Right.Menu.Fn.DisplayMode()){
                            App.web.Right.Menu.Fn.Hide();
                        }
                        else if(App.web.Right.Menu.Active.ID!==ID && App.web.Right.Menu.Active.Job===Job && App.web.Right.Menu.Fn.DisplayMode()){
                            //اگر جاب ها یکی بود نیاز به لود ماژول جاب نیست
                            App.web.$Control.$Main.removeClass('right-column-open').removeClass('narrow-message-list').delay(500).queue(function(next ){
                                App.web.$Control.$Main.addClass('right-column-open narrow-message-list');
                                console.log('1');
                                next();
                            });
                        }
                        
                        else if(App.web.Right.Menu.Fn.DisplayMode())
                        {
                            App.web.Right.Menu.Fn.Hide();
                        }
                        else
                        {
                            App.web.$Control.$Main.addClass('right-column-open narrow-message-list');
                        }
                        App.web.Right.Menu.Active={
                            Job:Job,
                            ID:ID
                        };
                    },
                    Hide:function(){
                        App.web.$Control.$Main.removeClass('right-column-open').removeClass('narrow-message-list')
                    }
                }
            }
            
        },
        init:function(){
            App.web.$Control.$Main=$('#Main');
            
            App.web.left.init();
            App.web.Center.init();  
            App.web.Right.init();  
        }
    }
};
