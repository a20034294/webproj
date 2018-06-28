#include <bits/stdc++.h>
#include <time.h>
#include <windows.h>

using namespace std;
FILE *r, *w;
struct player {
    int id, type, x, y, name;
    player(int ID, int TYPE, int X, int Y) : id(ID), type(TYPE), x(X), y(Y) {}
    player() {}
};
player data[1000];
int main() {
    int i = 0;
    int a, b, c, d, id, type, x, y;
    char name[100] = "qwer\0";

       id = 2;

    w = fopen("id_name.txt", "a+");
    fprintf(w, "%s %d\n", name, id);
    // cout << name << endl;

    fclose(w);
    fclose(r);
    float angle;
    while (cin >> id >> type >> x >> y) {
        if (type == 4) {
            cin >> angle;
            w = fopen("enemy.txt", "a+");
            fprintf(w, "b %d %d %f\n", x, y, angle);
            fclose(w);
            // cout << "a" << endl;
            continue;
        }
        r = fopen("in.txt", "r");
        while (~fscanf(r, "%d %d %d %d", &a, &b, &c, &d)) {
            data[a] = player(a, b, c, d);
        }
        data[id] = player(id, type, x, y);
        w = fopen("in.txt", "w");
        for (int j = 0; j < 50; j++) {
            if (data[j].id) {
                fprintf(w, "%d %d %d %d\n", data[j].id, data[j].type, data[j].x,
                        data[j].y);
            }
        }
        fclose(w);
        fclose(r);
    }

    return 0;
}