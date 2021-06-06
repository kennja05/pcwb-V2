import styled from 'styled-components'

const HomepageHeader = styled.header`
    height: 100vh;
    font-size: 2.1rem;
    background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxEUExMTExMUFRQZGRYaGRMZGxwaGxsaGhwYGhsaIR8bIjglHCkpHhYZIzQlKS07MT4xGiI3PDcvOys2MS4BCwsLDw4PHRERHTIkIigwMDAwPDkwMDMyMzAwMTAuMDAxMC4wLi4wMDAwMDMzMDI7MDAwOTswOTIyMC4wMC4wMP/AABEIALwBDAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQMEBgIBB//EADsQAAIBAwMCBAQDBwMEAwEAAAECAwARIQQSMQVBEyIyUQZhcYFCUqEjM2JykbHwFILRU2OSwUOi8RX/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAgMBBAX/xAApEQACAgICAAQFBQAAAAAAAAAAAQIRAyESMSJBUfAEYXGh0RMygZHh/9oADAMBAAIRAxEAPwD9mpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQHyuMi186yyPvYsJHBQk7SAbbbdvkeRf2wezrkergeLLbjd+thf9b1hnbUbRcFbOk6frUlQOnB5B5B7g/OtquM6XrzFJuGUbDqM/RgPcfrXYRsCAQQQcgjIIPeu4snOPzE48WZKUpWxApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUrG7gAkkADJJwAKAx63UBEZz2HHuew+5xXEdR8QgkNtJuWa1ySc2A9yTyeL8HtW6r1HxGx+7X0g9z+c3/Qfc+1TzEzsv5b5vya+f8RlUpcUb44UrZowaFgNwvu9/f6+9dN8L9Q3AxNgi5Ue3uv63HyJFrLWSPSLtrm5NcVcskdnRwd18gruHBt5SN4J5sWFr1GKbhK/7KlHkqP0Cvta2g1Syorrww47g8EG3sQR9q2a+knezzClKV0ClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAfKUqd1Hq6R49T/lH/ALPb+/yqZSUVbOpX0bWp1CopZiAPf/0Pc/Kuc6h1CSZgqg7L4QZJt3Pv/YfPt6jgm1B3ubJmxPAH8I7/AF/U8VH1vxggdtN0yE6zUDDyA2hj+ckvH+1T2IuDivJOc8mo6Roko99lTURQwRtLqJERV5LMAi34uTyT7c+wrjdR8WarVvt6bEFhDDdrZgVQ2JuETk8W7nPC81Tj+DDK41PVdQNTILlYfTp475sqfj+ptfuDzVaRwbCNcAWB4AHYD2H0FYNwh1t/Y0SlLvR6i6wbWODULq0+2USA4YOSv0Clv6jNv4fkLU30IaxY/YY/Xmn+gj5sCRwTmsey+in8G9Q4jJw4uv8AMuD/AFUX9vL866qvz/SxNEFKepTuHzIO630Nd3p51ZVccMAR9CLivo/DTuPH0PPkjszUpSvSZilKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClK+UArDqJ0QbnIUe5/t8/pU7X9cVfLH524xkX+3q+g/rUbq08cSibXzCNSbLHy7H8qKM34woJ+nNYyzK+MdspR82b2p6xJKdkCkDu3e3v7IPmc/Q1I6j1PS6RhHJu1OrbKaSIeI5v3I7DuWaw5IBqZ1Dr80i+Gjf/zdOeMbtZIpA8wUX8G+ctdsfhrc+GoY4U26KGQO9zI8iKZHJN95NyzZJy72F+9edtN+J2/Q04utKkeNT0nWa0bupyjT6Y8aCF/UPaWUZf8AlTy8G4NU9PPHCiw6WFYkHpVVz8yEXJPuTmt3S/D0jnfPI1/YEFvu1rD6KPvVrSaOOMWRAvue5+pOT96r9KeTvSOcox62QIOizSHc/l/ifzN9lGB/UGqMXQIx62d/vtH/ANbfqar0rWPw8I+RLnJmkvSIB/8AGv3z/esM/QYG4DIfdWP9jcfpVOla8I+hNs43q2kaBvNmM8PwPofY/wCfKrnwxNuhtztZhf5GzD9GFU5olYFWAIPY140+kRBtVQB7VmsKT0U52qZnpSlbEClKUApSlAKUpQClKUApSlAKUpQClKUApSlAfKVjmlVQWYgAdzUibq0khKQKfm57f1wPvn5VnPJGPZ1Jsoa3qEcQ8xz2UZJ/4+pqLq9U8iM8jrDAoJZ2NlsOSSbbh/RfvUnUdYiVzHp0/wBbqLkEgnwkYc7nsdxHcAMRbIXmtKfQtM4fWyHUyg3XTp5YYz2wCQCM5uzYw44rzzyN96Xp5mkY+hlf4gkcMvTYSwAO7WyLi3N40NtwIvYsVQ2xvqZoenHf47u0s5Hmlk8zKLk7b8KM+hFUD581ZkV3U3ZI4VOThIlJPueSSRk3bPFZY4QgXarKPws6EysDn9nC2QeSGlzdfQb1yMJTWtIrko/NmsqBEQsLi7FBazSPksVRRvkOTlQTbvVXT9R1Mai0CKnJGx1/qSbg/NhevXQNIsxkkV3QHaGN7yyXG4M0hzt8xsosBkALa1UZvhyEjyb437OHYkH/AHEj/wB/MUWKS3FnOaf7jN0jrKTYsVkAuUJBxxuBHqH65FwL1TrhWMiyMrWXUR+YMOHX8w98Xv7jcDkV1UHVFaJJbHaxsxH4Dcqb/IMLE/fitsORyuMu0RONbRRpSlbkClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQHylcv1H4ikLOsVl2br8Fzt5wePpa/9qrr1HZEhm8shRSyDJDWz+t/lUuSXZ2mUL1N1vWFU7EHiPxYZF/tz9B+lRurdXUp4k8ghguQq5ZpCBeyqvmc2BIAHGbG1xJn1+ocWS+ihbhjZ9TKBnygegWzjsbhkItWE8zfWl6/gtQN/q3VI0cCdmkmIBXSRWL2PF8hYweLkgH8xOKnapZ5hs1TCKI8aGAm5B/6jkAt8wQBkhkb1Vl6f04QgBEMAck3/eaiUnlifc4ub57sTW1GqqWRVJYetFYXXj99KfLHgjy5cqfSbVEYye1/b7KbS7Mem0xC+EkYjQADwY8YHAduwHFuB2Fq9xKu26bGT/qG4hHfBHmnPeyeXBBYVs6bQNKNoVXQH02KwLb+E+aZu13uLqCFWr2l6Wine5Mkn527fyjha2jjS32Q5NknRdMkcq+Rb0yyAXUZxFGPLELEi48xFrsbVa0XT447lRdjy7ZY/U/atusQnTds3LuAuVuLge9q1SIIsSDT6qwxHLx8m3cfIb34/wC6Oy1fqF8SaiB0K+LGJEO5V3gNexBXnBKkgX7kHtX1te7QLqIzudPWgIAdcb8HF9tnW/yF7E1EWk2imrVmv8YxbTDOvqV9pPyILD65Fv8Aea8dJnjVdXG5/Z7TIF5Oxl81h3suz7t869/FmujKwx3vuZZCP4Vyo+RZiqge5tUdunpJIwksfDjRBe/rsocjab4VXB9gwrzt1m0aJXDZ1/RJWaGIv69tmPuV8pP3IvW9Wp0uDZEiG9wM35ucm9vrW3XsMRSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA+V4dwBckAe5xXuuU6zp5jK7SqxiBsrgrtUNhSAT7kbjb9K43R1Ffr+tkjiDR9yBvA3bQeDb62F+M1K6FO/ilnnJUITIj7t24sQFAOLgr2yNwFvMK+9N67BGkWmimWWbb6HZQ43G9mS+4WLWt2tYm9fn2rg1nUpm8TVQQQNIxPht+02gBNpI5uEFwbZUXVtoAhy2dS0dV8eddCBBBoX1EkkmSqHIUWfeyqbAoSvm7E8bagdH1fU4nWXVSgPNuMUJWNwiqRdmKgEvbjPuTc4EyLQzTvtjYgwLuiQudqpGoEsQv6iSkTXJHqJvgGqul6RqHaN5ZgsCkbCytuZiASgX1O1hawFzjGKxlNtUlbN440tt0WV0/hg6h132Cr/qXUBiAB6UJspJF8DnIAJtW0FN8b1dxcG26dx7hTlBf8TbVUnnNZNPC5ZFUPuUWW9mlAGMA3SBeMnc1mtZDVnp/QQAfEsAxu0aknceA0jnzSNYDJPauRxbvs45UStPpJJCdlyc3sxJ9v2k3JwR5Y7d/M1WOndITau8oyr6YkAES/IAc8nn3zXuXSh5fCItCiK3hjCszlgLgchQl7cXb5CnUoYYVEqhIyrRqSLKCrOqlW7Eebv3tXojGuzGUrKoW2BxUr4illCosRO5jkLhioGbE4GSvJH1rxq+rm11/ZR/9WQHc3yjj9Td8tbtYMDUPVdQYkmMMptu8RrNM6i+fNZYkOckqguRdTXZXWjiKMuqkhjVZZiWI/dx+aQi9h527EkKXIHIAIOTK1OtchlFo4wxDIptdiOJJCCS5x5QGfOUYZrV0+ikkLEL4lrsTciMEA5LMQ0ht3JXytbdKuK99FlO13lhQFLIhkZRHHHYDNrKoJtZFAFrEAmoTaVPZVeZg1GglMTyKNsdxZiozfFkRn4IsTcsx81ghso9aKaZYdjWTxQYyoV38Rcn9mFF2IUve2bYxYEUpyzkPKTf8LOvmsbYihPHtuksLqDsN6zJodR4qKInVXF5NQWDOyg32M19w5JCgBRcgA8VCxLlyO83VGDTaR3kBALSXvZiDtbI3ykeUbc7YwSLi5LELto9B+GPBmkmkZXY22kAj7m/f7nt7C13S6ZI1CooVR2H+ZrNVxxKLslzb0faUpWpIpSlAKUpQClKUApSlAKUpQClKUB8pWHU6lEG52AH+cDvUTX9aNr7hDH+dvU3PpHzsbfTB7VnKcY99lKLZV1nUEjwTduyDJP8AxXF/HWu1EqLp01I0zuQWRBvk2WJFwGBXcRz32kYzX1tXLIxSNZIQbiwAbUycHJPlhBz7k3BBBra0/Q44xtlsCx3CCO7Ozfmdzlze5ucZOKw/Uk37+5aikcBP0bTRQHw53l1MsmyWaT1eb02J484DHObZJsLVYvhpWUSowQOpeQfu0hkDWOTgKRcXv+C/cVUHRYGbxXVJT3ubQhhgktY727FYwRe9ypN637N4kUTHw2Y2SR0AVHK+QpFeyXOAxJe5A3ZxO5PxGvhivCa2i6dFCLgC5N/EkU2J4ukRszE58zkDON4Ne5dYVaNhe0iErMxu7qp2vHewEdrKTGoUeb03Bt96NrBeSKcEOfJIOWWQW4uM+azDscECxrVnZ1SXTNGdxcSxMTYJICA4b5MDf575MjBM87uK1+RVbeylPMkE0M8XoPrUG5CEWYH3sbML+57Cu2jYEAg3BFwfcGuH6SUmR4iB5srfs4uCp/oyn61l6P8AExijeB1JkjJCljtUR9mYnjacHtxkdu/D5KbT9sjJHzOo1sJB8VJFjYCxLC6MvIDC44JwQe5965rW9ZkdgQyuFbyOEZYi9sbVuXmcAkgLjBtkVo6nqUjymOVt5bzxqVOVJsQIyRfJIDMVWxUgyXs21/o9tjO7IWFhEvmmkGMHAspOdoCx3JBS+a9bkZJGlLrwZVS7yzMdoAsz8nBNjHCPLa3mbi4jYXqhDoEU7XvLJfd4CE7QwsN0jkklhYXZizgj1WNfZTuBiVFVVKkwpYlStirSyt5Y7XUhfVbhWtTSxLI5hXw5GADGEeWNVuQGZSd8vYbnxcAqgrm/M6fXmMijKmMHFrpADzgr5pz3smLhhvHFbGi0DyFWUHHpmcABef3UY8qYJFx5iOXuKr6Xoyht8rGR8c+kfQf4MYAqpXVEmzQ0PS44/Nln7yNlr9/p/l71v0pVnBSlKAUpSgFKUoBSlKAUpSgFKUoD5Slamv16RjOWPCjk1xtJWzqVmyzAC5NgO5qTretgBim3aou0rnbGo9yT/n1qN1PrDOzL62U5jDbY4/bxH9/4RduMAGpWoV2KGQ+I/MakbI1+aRk2UerzuSbXzYY8k87eo/6aRx+ptTdb3P5Q0jHAmkBAOQDsjtey3JLEAXC2B3XG0vS2v40zmP8A7jZlN7YRc+Hx2u2BmvuklSEApZ5XFzMwJJA7RpyVW/qNlHJNjXyGGadty7j2L7re9wZF9P8ALFkfnINIQ9ff8lGRteqAxwoUt6rW8TPd2Pljvz5juPKqa86TpUkwNwNjc3v4ZvzcHzT8/jsh/KDVXT9IghUPKyWBxuskalj2Xi5JGTc3q3W8YEOS8jkviTo/hosqszbMPc/hNrMBwu0+3atDVh54hYFXjsS4I3AAhlYDvtbzD69q6ZVC6iWNx5ZlBX2O1drD62t9rVzWnB0uoMTZUYF/xRng/O19p+3vXlzxp8l9GaQlapk2bVSsW1cigAskcjooVEkACre53G5IG6xBDJnFhU6k5kjTUx28WJlD37MtipP1B2n5MKm9K1SDVT6KYAQ6ldhF8b7BVINzk5W97nahxapGpmmiPhCXc+I3ljZgJUjbkkd77sC+TzYmoq/En9fqinrXujoerkLJFq4sJPZrH8MgI8RDbuVViBxuRz3qd8X6iP8A1GnmQtdk3PsFyACcj53UkWyGYG4uKzQ6ho4JNPIhtJseIsQuyTaHUtc2FwFJHchhy9qx9GhcttVWu1todgDHgCw3HlTixBypIGcTKS5KS8/szqWq90XIjGhURIVbzFZWUSTyXsGdF/CGuAzmwyNzAivcUTFiAGLHlI2vIeR+0mHp7XEdsixcg196JpFkd4iTHbLrcl5CPKS7sSzEWA8xPNdTptMkY2ooA/v9T3r343yjZ55adEzRdEwok2hV9MMY2ov2H1/vk1saPoWnikeVI1EjEnd7XtcD8t7VSpWlIg+0pSugUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgNLqutWGNpDm2APdjgCuReSSQszM2SVZ1NndhzGh/AF4Z+3AyL1T+JNRvNkItGHLMSAqvxuJby+Ubu/cjtUtWwiIt9qhVZwbd8Kl98pvksSqm9wW4rw55uUqXSN4RpGxAkcSBiIztwt8Qxk8BRzIxPtkk4vWGCGSVyVRmkPqdgN4v8AJhtj4HqucW2Lg1T6d0B2IeRmU2tuNjJY9hYbYwbDyqBxkXzV/TaVEXagsP8AM1eLG32qRxzSJWg+HQLtKd5NiVF9pI43E+aT/di2LVZjQAAAAAYAHavdK9SSXRk5N9mOWJWBVgCpBBByCDyDUjT61NMTDM+xB+6lc2Up+QscXXjPa1VtRqERSzsFHua53q/XDIPDjuivgNt3O9iL7EsSfm1rDuV5qZfLsI99a63ErxMbske52ZVLH0kAC3bOSccC5OKkdd1TaiVLIEdAbAEFrMB5ZWJCxjIaxO6wuoasBdIgRdk941fz558SUG0fPEZ3Y/eMMVDOplfZBCoWNDdI0WygE4QKcHnbubPGPxHGTtOL2zSK3aMmrO+Np/CVyP2cjhgCoW4EoIwceUn3jW1rkVl6nHDHaJTaREjkaNb+UOzKLdsoAB+L+ovi0/w5IY3VmDSAAGMcixIuzXCxnYQtmILFBjuLOmMgiUSqAWRNkhNjeMlVNz6rAsueQb2sa8TjT372bcr6I2jm1MuJJJLqqqpYDepUMwYkC9wQPUe5B+dOWWIOrwhhdVaRTfySg7Tk+rda1xjyY9VZOj6hY52DC6kCNgQcqwFyCeQRtAIx5T3vTU6FfFl0zbT4g2xzHPgy4MbD23kIDtzdVvyKqEeTcTjlWynqp7GLVpz+Lt5gM3+TLf8Apeuo0WpWRFkXhhcX5HyPsQcH6VyPQNNK+6OWGZVZblWFgj8/ysQfmeLiun6LoDDGELbjckntc9h8v/3vXtwQcE7MJtPooUpStyBSlKAUpSgFKUoBSlKAUpSgFKUoBSpUmvk3NZMKSCDjjvf9fvU+frx8TYkniMBeRY1LLFgEb22kITcWU+bINiLkAX5pVUZ78AZJPyFRdV1VnwguPcGyfdxcuecID7ErzXqDpzSeZ7BGFzY+q/uPxXB/FjF9oqtBo0TIGfzHJoDkeoaNlkieQZvEMqNqs7iMSKhJAIxlrsAPUb1X+EtrRuxA8QSOGbvyCOc8Efes/wASabcm/soYN/K1rn/aQrfQGovT+oCCYs37uU2f+GQXJb75b6EkX2GvG2o5d9G37o6OypXhWBAINwcgivdewxPlYNbqBHG7nIVSbe9hxXuWVVBLEADknArnet9dVkKKt1bAZr+cjO1FALOcdge+KznNRXzKSsjarqJlZnkfzAhSANxUlQ+2NGxcK6XdwVBYDaTciXrerE3SMMCxG7Y26Rxew3ytngnyjAsQCtYJ+mkaifcZPClkaRJFV3ADhQ8Tol2VgUXlSthe4vaqcGgC7TCpDqcsVDSupHmCxkELizAyZ3oPLyawi3JVZbpbo1dP0diV8Z7KSTHGoJdhj0ry1t2XIAsclat6DQE+SNSo7pG3mtn95KPT/LHbK5dqr9P6Ccl/KGyyhizv/PIct3xwBgWq3BCqAKqhQOwraMElomUrOb6h0EpA5DAFRu2IAsYUeoAdri5v/hl6crNA0DAs4uVUC7MDhlt8x74uM13ZFc3ofhUxS7klCxhiVQLkA523vbHvas54FKXJfydjOlRFh0E2pVJPVLGPCc32709cbjIBK3dTf3LC3B6TQdFJEJmC7o/SFOOxAOOxzYVU0+nVAQgAuST82OSTWet1FdkNn2lKVRwUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgIHxX0wSoN0kyRlhvWNihcWICsy+baSRfaRwPnXvpekDgqbiNeE+uc/57VaZAQQcg9qKgGALCgPoFfaUoDyRXH/Evw+wVtgcxm3o9aEG6lcfhOQbH2IK3rsaVnOCktlRk0fmHR+s67T+XcJohch0W/8A5RC7A/KK4OeMCr8XxZKwBIC/TT6pm/8AHw7j71f1nRdPKbvGpP5hg/1FYY/h7TjG1iPYsf8AmseGTpP7l3FnO6iaWVrEsc4LgFu3oiQkDF8uRYgXRhVXpnw6fU5KkixN7yMOQGb8Iv8AgUBRc2Aq3ptJGmERV+grYBrqw78ezjn6Gk3R9OQAYkxwbZ/ryaz6fRxp6EVfoM/1rPSt1GK6RFn2lKVRwUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgP//Z);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    position: relative;
`

export default class Homepage(){
    render(){
        return(
            <HomepageHeader>
                <h1>
                    PCWB Homepage
                </h1>
            </HomepageHeader>   
        )
    }
}