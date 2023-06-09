import { LRParser } from '@lezer/lr';
import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "!WQYQPOOOkQPO'#CeOOQO'#Cj'#CjOOQO'#Cf'#CfQYQPOOOOQO,59P,59POrQPO,59POOQO-E6d-E6dOOQO1G.k1G.k",
  stateData: "y~O]OSPOS~ORQOSQOTQOUQOWPO~OVTO~PYOVWO~PYO",
  goto: "v_PPPPPPPPP`fPPPpXQOPSUQSOQUPTVSUXROPSU",
  nodeNames: "⚠ LineComment Program Identifier String VariableName Operator } { Application",
  maxTerm: 14,
  nodeProps: [
    ["openedBy", 7,"{"],
    ["closedBy", 8,"}"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 1,
  tokenData: "!7i~RmXY!|YZ!|]^!|pq!|qr#_rs'ist)V}!O)n!Q![*c!c!}*c#R#S*c#T#U*c#U#V*}#V#W0p#W#X*c#X#Y9j#Y#a*c#a#b;_#b#d*c#d#e=o#e#f*c#f#gEd#g#hKv#h#j*c#j#k!1h#k#l!3]#l#o*c#o#p!7_#q#r!7d~#RS]~XY!|YZ!|]^!|pq!|~#bQ#V#W#h#]#^$i~#kP#c#d#n~#qP#b#c#t~#wP#g#h#z~#}P#h#i$Q~$TP#T#U$W~$ZP#b#c$^~$aP#h#i$d~$iOR~~$lP#W#X$o~$rP#X#Y$u~$xP#b#c${~%OP#h#i%R~%UP#]#^%X~%[P#Y#Z%_~%bP#]#^%e~%hP#X#Y%k~%nP#f#g%q~%tP#g#h%w~%zPpq%}~&QP#[#]&T~&WP#]#^&Z~&^P#X#Y&a~&dP#f#g&g~&jP#T#U&m~&pP#f#g&s~&vP#V#W&y~&|P#[#]'P~'SP#]#^'V~'YP#V#W']~'`P#T#U'c~'fP#`#a$d~'lVOr'irs(Rs#O'i#O#P(W#P;'S'i;'S;=`)P<%lO'i~(WOS~~(ZRO;'S'i;'S;=`(d;=`O'i~(gWOr'irs(Rs#O'i#O#P(W#P;'S'i;'S;=`)P;=`<%l'i<%lO'i~)SP;=`<%l'i~)[SP~OY)VZ;'S)V;'S;=`)h<%lO)V~)kP;=`<%l)V~)qVpq*W}!O*c!Q![*c!`!a*x!c!}*c#R#S*c#T#o*c~*ZP!_!`*^~*cOT~~*fUpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#o*c~*}OU~~+QVpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#U+g#U#o*c~+jWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#V*c#V#W,S#W#o*c~,VWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#_*c#_#`,o#`#o*c~,rWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#Z*c#Z#[-[#[#o*c~-_Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#g-w#g#o*c~-zWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d.d#d#o*c~.gWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#i*c#i#j/P#j#o*c~/SWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c/l#c#o*c~/oWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#W*c#W#X0X#X#o*c~0^UR~pq*W}!O*c!Q![*c!c!}*c#R#S*c#T#o*c~0sWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d1]#d#o*c~1`Ypq*W}!O*c!Q![*c!c!}*c#R#S*c#T#`*c#`#a2O#a#b3W#b#c6p#c#o*c~2RWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d2k#d#o*c~2nWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#g0X#g#o*c~3ZWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#d*c#d#e3s#e#o*c~3vWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d4`#d#o*c~4cWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c4{#c#o*c~5OWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y5h#Y#o*c~5kWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c6T#c#o*c~6WWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i0X#i#o*c~6sWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i7]#i#o*c~7`Vpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#U7u#U#o*c~7xWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#]*c#]#^8b#^#o*c~8eWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c8}#c#o*c~9QWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y2k#Y#o*c~9mWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#`*c#`#a:V#a#o*c~:YWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y:r#Y#o*c~:uWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#a*c#a#b4{#b#o*c~;bWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d;z#d#o*c~;}Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#W*c#W#X<g#X#o*c~<jWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y=S#Y#o*c~=VWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#`*c#`#a0X#a#o*c~=rYpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y>b#Y#f*c#f#g@r#g#o*c~>eWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#g>}#g#o*c~?QWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h?j#h#o*c~?mWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d@V#d#o*c~@YWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c0X#c#o*c~@uWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#dA_#d#o*c~AbWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#d*c#d#eAz#e#o*c~A}Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#YBg#Y#o*c~BjWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#gCS#g#o*c~CVWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#iCo#i#o*c~CrWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#]*c#]#^D[#^#o*c~D_Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#YDw#Y#o*c~DzWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h0X#h#o*c~EgWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#YFP#Y#o*c~FSWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#`*c#`#aFl#a#o*c~FoVpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#UGU#U#o*c~GXWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#iGq#i#o*c~GtWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#]*c#]#^H^#^#o*c~HaWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#dHy#d#o*c~H|Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#cIf#c#o*c~IiWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#hJR#h#o*c~JUWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#[*c#[#]Jn#]#o*c~JqWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#]*c#]#^KZ#^#o*c~K^Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#d*c#d#e0X#e#o*c~Ky^pq*W}!O*c!Q![*c!c!}*c#R#S*c#T#[*c#[#]Lu#]#c*c#c#dNg#d#h*c#h#i!'f#i#m*c#m#n!(n#n#o*c~LxVpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#UM_#U#o*c~MbWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#d*c#d#eMz#e#o*c~M}Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y0X#Y#o*c~NjWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#Y*c#Y#Z! S#Z#o*c~! VWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i! o#i#o*c~! rWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#k*c#k#l!![#l#o*c~!!_Vpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#U!!t#U#o*c~!!wWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#g!#a#g#o*c~!#dWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y!#|#Y#o*c~!$PWpq*W}!O*c!Q![*c!c!u*c!u!v!$i!v!}*c#R#S*c#T#o*c~!$lWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#m*c#m#n!%U#n#o*c~!%XWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h!%q#h#o*c~!%tWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i!&^#i#o*c~!&aWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y!&y#Y#o*c~!&|Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#a*c#a#b0X#b#o*c~!'iWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#m*c#m#n!(R#n#o*c~!(UWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#`*c#`#aD[#a#o*c~!(qWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h!)Z#h#o*c~!)^Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i!)v#i#o*c~!)yWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y!*c#Y#o*c~!*fWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#a*c#a#b!+O#b#o*c~!+RYpq*W}!O*c!Q![*c!c!n*c!n!o!+q!o!}*c#R#S*c#T#V*c#V#W!.k#W#o*c~!+tVpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#U!,Z#U#o*c~!,^Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c!,v#c#o*c~!,yWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#W*c#W#X!-c#X#o*c~!-fWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h!.O#h#o*c~!.RWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#V*c#V#WLu#W#o*c~!.nWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d!/W#d#o*c~!/ZWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#b*c#b#c!/s#c#o*c~!/vWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#h*c#h#i!0`#i#o*c~!0cWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y!0{#Y#o*c~!1OWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#l*c#l#m6T#m#o*c~!1kWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#]*c#]#^!2T#^#o*c~!2WWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#X*c#X#Y!2p#Y#o*c~!2sWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#k*c#k#lDw#l#o*c~!3`Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#c*c#c#d!3x#d#o*c~!3{Wpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#f*c#f#g!4e#g#o*c~!4hWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#_*c#_#`!5Q#`#o*c~!5TWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#g*c#g#h!5m#h#o*c~!5pWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#d*c#d#e!6Y#e#o*c~!6]Vpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#U!6r#U#o*c~!6uWpq*W}!O*c!Q![*c!c!}*c#R#S*c#T#V*c#V#WMz#W#o*c~!7dOW~~!7iOV~",
  tokenizers: [0],
  topRules: {"Program":[0,2]},
  tokenPrec: 0
});

const FreyaLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({ closing: "}", align: false })
            }),
            foldNodeProp.add({
                Application: foldInside
            }),
            styleTags({
                Identifier: tags.keyword,
                Operator: tags.operator,
                VariableName: tags.variableName,
                String: tags.string,
                LineComment: tags.lineComment,
                "{ }": tags.paren
            })
        ]
    }),
    languageData: {
        commentTokens: { line: "#" }
    }
});
function Freya() {
    return new LanguageSupport(FreyaLanguage);
}

export { Freya, FreyaLanguage };
