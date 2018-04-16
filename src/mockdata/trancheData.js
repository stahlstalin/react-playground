const TrancheData = [
    ["Charles Schwab",
        {
            T1:[
                {investor:"Charles Schwab",mv:"UP",allocation:"2M"},
                {investor:"Charles Schwab",mv:"NONE",allocation:"1M"}
            ],
            T2:[{investor:"Charles Schwab",mv:"DOWN",allocation:"3M"},
                {investor:"Charles Schwab",mv:"DOWN",allocation:"1.2M"},
                {investor:"Charles Schwab",mv:"NONE",allocation:"0.5M"}
            ]
        }
    ],
    ["JPMC",
        {
            T1:[
                {investor:"JPMC",mv:"DOWN",allocation:"2.1M"},
                {investor:"JPMC",mv:"NONE",allocation:"1.5M"}
            ],
            T2:[
                {investor:"JPMC",mv:"UP",allocation:"1M"},
                {investor:"JPMC",mv:"DOWN",allocation:"0.2M"},
                {investor:"JPMC",mv:"NONE",allocation:"1.5M"}
            ]
        }
    ],
    ["Morgan Stanley",
        {
            T1:[],
            T2:[
                {investor:"Morgan Stanley",mv:"UP",allocation:"3.2M"},
                {investor:"Morgan Stanley",mv:"UP",allocation:"2.5M"}
            ]
        }
    ],
    ["Bank of America",
        {
            T1:[
                {investor:"Bank of America",mv:"UP",allocation:"3M"},
                {investor:"Bank of America",mv:"NONE",allocation:"0.5M"}
            ],
            T2:[]
        }
    ]
];
export default TrancheData;
